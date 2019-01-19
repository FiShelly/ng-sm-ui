import {
    Component, AfterViewInit, Input, OnInit, OnChanges, OnDestroy, Optional, Renderer2, ViewChild
} from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';
import {validator, util} from '../shared-services/utils';

// @dynamic
@Component({
    selector: 'ng-sm-tab-view',
    templateUrl: './tab-view.component.html',
    styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    @ViewChild('view') tabView: any;
    _label: string;
    _name: string;
    _id: string = util.randomString();
    @Input() disabled: Boolean = false;
    _disabledChange: any;
    __tabChange: any;

    @Input() set label(val: string) {
        if (validator.isEmpty(val)) {
            throw Error('必须输入该值');
        }
        this._label = val;
    }

    @Input() set name(val: string) {
        if (validator.isEmpty(val)) {
            throw Error('必须输入该值');
        }
        this._name = val;
    }

    constructor(
        @Optional() private group: TabsComponent,
        private $renderer2: Renderer2
    ) {
        this._disabledChange = this.group.disabledChange.subscribe(($e) => {
            if (this.disabled !== $e.currentValue) {
                this.disabled = $e.currentValue;
            }
            this.computeData();
        });
        this.__tabChange = this.group._tabChange.subscribe($e => {
            if (this.disabled) {
                return;
            }
            this.setTabDisplay($e);
        });
    }

    ngOnInit() {
        if (!this.group) {
            throw Error('No tab contianer.');
        }
        this.computeData();
    }

    ngOnDestroy() {
        this._disabledChange && this._disabledChange.unsubscribe();
        this.__tabChange && this.__tabChange.unsubscribe();
        this.group.deleteItemData(this._id);
    }

    ngOnChanges(changes): void {
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
            this.computeData();
        } else if (changes.hasOwnProperty('label')) {
            this._label = changes['label'].currentValue;
            this.computeData();
        }
    }

    setTabDisplay($e) {
        this.$renderer2.setStyle(this.tabView.nativeElement,
            'display', $e === this._name ? 'block' : 'none');
    }

    computeData() {
        this.group.setTabItemData(this._id, this._name, this._label, this.disabled);
    }

    ngAfterViewInit(): void {
        if (this.group) {
            this.setTabDisplay(this.group.model);
        }
    }

}
