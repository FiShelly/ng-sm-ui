import {
    ApplicationRef, Component,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    EventEmitter,
    Injectable,
    Injector
} from '@angular/core';
import {ModalAlertComponent, ModalConfirmComponent, ModalPromptComponent, BaseModal} from '../../modal';
import {EventBusService} from '../eventBus';

const modalMap = [
    ModalAlertComponent,
    ModalConfirmComponent,
    ModalPromptComponent
];

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    _nextZIndex: number = 10001;
    _queue: any = [];
    _vcMap: any = {};
    _fnMap: any = {};
    modal: any = {};

    // $body:ViewContainerRef= document.querySelector('body');

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private eventBus: EventBusService,
        private injector: Injector
    ) {
        this.createModal(modalMap);
    }

    adjustPosition(instance: any) {
        const el = instance.container.modal.nativeElement;
        const currentStyle = window.getComputedStyle(el);
        const w = Number.parseInt(currentStyle['width']);
        const h = Number.parseInt(currentStyle['height']) +
            Number.parseInt(currentStyle['padding-top']) +
            Number.parseInt(currentStyle['padding-bottom']);
        switch (currentStyle['position']) {
            case 'fixed':
                el.style.marginLeft = -(Math.ceil(w / 2)) + 'px';
                el.style.marginTop = -(Math.ceil(h / 2)) + 'px';
                break;
            case 'absolute':
                const windowInHeight = window.innerHeight;
                let scrollTop = document.body.scrollTop;
                if (scrollTop === 0 && document.documentElement.scrollTop > 0) {
                    scrollTop = document.documentElement.scrollTop;
                }
                if (h < document.body.scrollHeight) {
                    el.style.top = scrollTop + Math.ceil((windowInHeight - h) / 2) + 'px';
                } else {
                    el.style.top = scrollTop + 100 + 'px';
                }
                el.style.marginLeft = -(Math.ceil(w / 2)) + 'px';
                el.style.marginTop = '0px';
                break;
            default:
                break;
        }
        el.style.opacity = 1;
    }

    private createModalArray(modalArray) {
        modalArray.forEach((modal: any, idx: number) => {
            this.setModalInService(modal);
        });
    }

    private setModalInService(modal: any, $alias?: string) {
        if (!(modal.prototype instanceof BaseModal)) {
            throw new Error('the args must be BaseModal[] or extend BaseModal');
        }
        $alias = $alias || modal.$alias;
        if (!$alias) {
            throw new Error('the modal component should has $alias attribute');
        }
        this._vcMap[$alias] = this.componentFactoryResolver.resolveComponentFactory(modal);
        this.constructModal(this._vcMap[$alias], $alias);
    }

    createModal(args: any, $alias?: string) {
        if (args instanceof Array) {
            return this.createModalArray(args);
        } else if (args.prototype instanceof BaseModal) {
            return this.setModalInService(args, $alias);
        }
        throw new Error('the args must be BaseModal[] or extend BaseModal');
    }

    constructModal(modal: any, name: string) {
        this._fnMap[name] = (options) => {
            return this.build(modal, options);
        };
        this.modal[name] = this._fnMap[name];
    }

    build(modal: any, opts: any = {}) {
        const {inputs, outputs} = modal;

        const componentRef = modal.create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const componentRoot: HTMLElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
        const instance = componentRef.instance;
        this._queue.push(instance);
        const containerInstance = instance.container;
        containerInstance.modal.nativeElement.style.zIndex = this._nextZIndex++;
        instance.close = () => {
            for (let i = 0; i < this._queue.length; i++) {
                if (this._queue[i] === instance) {
                    this._nextZIndex--;
                    this._queue.splice(i, 1);
                    break;
                }
            }
            containerInstance.isShow = false;
            containerInstance.zIndex = this.checkMask();
            setTimeout(() => {
                this.appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        };
        opts.output = opts.output || {};

        outputs.forEach(row => {
            const {propName, templateName} = row;
            const outProps = instance[propName];
            if (outProps as EventEmitter<any>) {
                outProps.subscribe(data => {
                    if (templateName in opts.output) {
                        opts.output[templateName](data);
                    }
                });
            }
        });

        if ('modalCreated' in instance) {
            setTimeout(() => {
                const defaultOpts = ('defaultOptions' in instance) ? instance.defaultOptions : {};
                containerInstance.isShow = true;
                containerInstance.zIndex = this.showMask();
                instance.modalCreated(Object.assign(defaultOpts, opts.input));
                this.adjustPosition(instance);
            });
        }

        document.querySelector('body').appendChild(componentRoot);
    }


    showMask() {
        return this._nextZIndex - 1;
    }

    checkMask() {
        if (this._queue.length === 0) {
            return 9999;
        } else {
            return this.subMask();
        }
    }

    subMask() {
        return this._nextZIndex - 2;
    }
}
