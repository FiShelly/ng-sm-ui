# NG-SM-UI DOC

## Button `[ng-sm-button]`

### API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[icon]` | set button inset incon | string | - |
| `[type]` | set button type, which the value is normal or file | string | `normal` |
| `[text]` | the `[type]` is file,you should it this, and if will use in button text | string | - |
| `[theme]` | the button theme,can be set to `primary` `info` `warning` `success` `danger` | string | `default` |
| `[disabled]` | can be set to button disable status | boolean | `false` |
| `[loading]` | can be set to button loading status | boolean | `false` |
| `[plain]` | can be set to button plain status | boolean | `false` |
| `[round]` | can be set to button round status | boolean | `false` |
| `[circle]` | can be set to button circle status | boolean | `false` |
| `[multiple]` | can be use to select file multiple or not. if `[type]` is file, you should set it. | EventEmitter | -  |
| `(btnClick)` | btn click event handler | boolean | `false` |
| `(filesChange)` | if `[type]` is file, and when you select file, you should use it to listener event. | EventEmitter | - |

```HTML
<ng-sm-button
(btnClick)="btnClickHandle($event)">
    {{YOUR_TEXT}}
</ng-sm-button>

<ng-sm-button
    [type]='file'
    text='{{YOUR_TEXT}}'
(filesChange)="filesChangeHandle($event)">

</ng-sm-button>
```

## Checkbox `[ng-sm-checkbox]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to checkbox disable status | boolean | `false` |
| `[label]` | set checkbox label (use in a group of checkbox) | string | `` |
| `[(ngModel)]` | to bind value | - | - |
| `[checked]` | can be set to checkbox check status | boolean | `false` |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |

```HTML
 <ng-sm-checkbox [(ngModel)]="YOUR_MODEL">
    {{YOUR_TEXT}}
 </ng-sm-checkbox>
```

## Checkbox Group `[ng-sm-checkbox-group]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to a group of checkbox disable status | boolean | `false` |
| `[(ngModel)]` | to bind value | - | - |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |

```HTML
<ng-sm-checkbox-group [(ngModel)]="{{YOUR_MODEL}}">
    <ng-sm-checkbox *ngFor="let item of LIST; index as i; " [label]="item.id">
        {{item.YOUR_TEXT}}
    </ng-sm-checkbox>
</ng-sm-checkbox-group>
```

## Date time picker `[ng-sm-date-time-picker]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to a group of checkbox disable status | boolean | `false` |
| `[(ngModel)]` | to bind value | - | - |
| `[dateFormat]` | can be set to format date data | string | 'YYYY-MM-DD' |
| `[timeFormat]` | can be set to format time data | string | 'HH:mm:ss' |
| `[placeholder]` | can be set to date time picker placeholder | string | - |
| `[showTime]` | can be set to show time or not | boolean | false |
| `(modelChang)` | listener to ng-model change event | EventEmitter | - |

```HTML
<ng-sm-date-time-picker [(ngModel)]="YOUR_MODEL">
</ng-sm-date-time-picker>
```

## Input `[ng-sm-input]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[type]` | can be set to input type (the value is reference from input nativeElement) | string | text |
| `[suffix_icon]` | the input suffix icon | string | - |
| `[prefix_icon]` | the input prefix_icon | string | - |
| `[disabled]` | can be set to input disabled status | boolean | false |
| `[readonly]` | can be set to input readonly status | boolean | false |
| `[(ngModel)]` | to bind value | - | - |
| `[placeholder]` | can be set to input placeholder | string | - |
| `[autocomplete]` | can be set to input autocomplete status | string | on |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |
| `(focus)` | listener to focus event | EventEmitter | - |
| `(blur)` | listener to blur  event | EventEmitter | - |

```HTML
<ng-sm-input [(ngModel)]="YOUR_MODEL">
</ng-sm-input>
```

## Label `[ng-sm-label]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[isTrust]` | can be set to text is safety text | boolean | false |
| `[text]` | if you set istrust is true, you should use this to set lable text | string | text |
| `[suffix_icon]` | the label suffix icon | string | - |
| `[prefix_icon]` | the label prefix_icon | string | - |

```HTML
<ng-sm-label>
    {{YOUT_TEXT}}
</ng-sm-input>

<ng-sm-label [isTrust]="true" [text]="{{YOUT_TEXT}}" >
</ng-sm-input>
```

## Left menu `[ng-sm-left-menu]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[menuData]` | the left menu metadata | `MenuItem[]` | - |
| `(menuSelect)` | listen to menu is clicked | EventEmitter | - |

### MenuItem API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[icon]` | the left menu item icon | `string` | - |
| `[text]` | the left menu item text | `string` | - |
| `[isLink]` | the left menu item is-link or not | `boolean` | false |
| `[link]` | the left menu item link value | `string` | - |
| `[type]` | the left menu item type | `string` | - |

```HTML
<ng-sm-left-menu 
    [menuData]="YOUT_MENU_ITEM" 
    (menuSelect)="menSelectHandler()">
</ng-sm-left-menu>
```

## Loading `[ng-sm-loading]`

### API
`[NULL]`
You can use ng-if to show or hide it.

```HTML
<ng-sm-loading></ng-sm-loading>
```

## Mask `[ng-sm-mask]`

### API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[zIndex]` | can be set to mask z-index | number | 10000 |
| `[isShow]` | can be set to mask show status | boolean | false |

```HTML
<ng-sm-mask></ng-sm-mask>
```

## Pagination `[ng-sm-pagination]`

### API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[current]` | can be set to pagination current page number | number | 1 |
| `[total]` | can be set to pagination total page number | number | 1 |
| `[limit]` | can be set to pagination display how many data in every page | number | 1 |
| `[showLimit]` | can be set to pagination show limit row or not. | boolean | false |
| `(changeLimit)` | listen to the limit change | EventEmitter | - |
| `(changePage)` | listen to the page change | EventEmitter | - |

```HTML
<ng-sm-pagination
            [total]="YOUR_PAGE_TOTAL"
            [current]="YOUR_PAGE_CURRENT"
            [limit]="YOUR_PAGE_LIMIT"
            (changePage)="changePage($event)"
        >
</ng-sm-pagination>
```

## Radio `[ng-sm-radio]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to radio disable status | boolean | `false` |
| `[label]` | set radio label (use in a group of radio) | string | `` |
| `[(ngModel)]` | to bind value | - | - |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |

```HTML
 <ng-sm-radio [(ngModel)]="YOUR_MODEL">
    {{YOUR_TEXT}}
 </ng-sm-radio>
```

## Radio Group `[ng-sm-radio-group]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to a group of radio disable status | boolean | `false` |
| `[(ngModel)]` | to bind value | - | - |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |

```HTML
<ng-sm-radio-group [(ngModel)]="{{YOUR_MODEL}}">
    <ng-sm-radio *ngFor="let item of LIST; index as i; " [label]="item.id">
        {{item.YOUR_TEXT}}
    </ng-sm-radio>
</ng-sm-radio-group>
```


## Select `[ng-sm-select]` ; Select option `[ng-sm-select-option]`

### `[ng-sm-select]` API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to select disable status | boolean | `false` |
| `[(ngModel)]` | to bind value | - | - |
| `[placeholder]` | can be set to select placeholder | string | - |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |

### `[ng-sm-select-option]` API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to select-option disable status | boolean | `false` |
| `[label]` | the option value | - | - |

```HTML
<ng-sm-select
    [(ngModel)]="YOUR_MODEL"
    (modelChange)="modelChange()">
    <ng-sm-select-option 
        *ngFor="let ITEM of ITEMARRAY" 
        [label]="ITEM.LABEL">
        {{ITEM.TEXT}}
    </ng-sm-select-option>
</ng-sm-select>
```

## Switch

### API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to switch disable status | boolean | `false` |
| `[label]` | the option value | - | - |
| `[activeText]` | if switch is active, the display text will use it | string | - |
| `[inactiveText]` | if switch is in-active, the display text will use it | string | - |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |

```HTML
 <ng-sm-switch [(ngModel)]="YOUR_MODEL">
 </ng-sm-switch>
```

## Tabs `[ng-sm-tabs]` ; Tab view `[ng-sm-tab-view]`

### `[ng-sm-tabs]` API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to tabs disable status | boolean | `false` |
| `[(ngModel)]` | to bind value | - | - |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |

### `[ng-sm-tab-view]` API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to tab view disable status | boolean | `false` |
| `[label]` | the tab view value | - | - |
| `[name]` | the tab view name | string | - |

```HTML
<ng-sm-tabs [(ngModel)]="YOUR_MODEL" (modelChange)="modelChange()">
    <ng-sm-tab-view label="LABEL1" name="TYPE1">
        // ...
    </ng-sm-tab-view>
    <ng-sm-tab-view label="LABEL2" name="TYPE2">
        //...
    </ng-sm-tab-view>
</ng-sm-tabs>
```

## Table shown list `[ng-sm-table-shown-list]`

### API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[format]` | defined how to get value in dataList  | `format[]` | `false` |
| `[operations]` | defined the table operations event | operations | - |
| `[width]` | the table width | string | - |
| `[minHeight]` | the table min height | string | - |
| `[checkable]` | the table -> tr can be checked or not | boolean | false |
| `[tableBorder]` | show table border or not | boolean | false |
| `[tdBorder]` | show td border or not | boolean | false |
| `[dataList]` | the metadata | boolean | false |
| `[op]` | listen to table operations | EventEmitter | - |

### format API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[name]` | it will be get dataList value(`dataList[name]`), and show it in tbody td   | string | - |
| `[text]` | can be used to table thead td   | string | - |
| `[defaultText]` | if `dataList[name]` is null, the tbody td will use it.   | string | - |
| `[width]` | the table td width   | string | - |
| `[isForceHTML]` | force display html or not  | boolean | `false` |

### operations API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[width]` | the last td in every tbody tr width  | string | - |
| `[text]` | the last td in theade tr width  | string | - |
| `[list]` | the array of opitem, and it show all of operation in table  | - | - |

### opitem API
| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[name]` | the operation index, you can use it in event handler  | string | - |
| `[text]` | the operation text, it will show in table.  | string | - |

```HTML
<app-table-shown-list
    [width]="WIDTH"
    [format]="LISTFORMAT"
    [operations]="LISTOPERATIONS"
    [dataList]="DATALIST"
    (op)="onOperation($event)"
></app-table-shown-list>
```

```JavaScript
listOperations: object = {
        width: 150,
        text: 'operations',
        list: [
            {
                name: 'edit',
                text: 'edit_op'
            },
            {
                name: 'delete',
                text: 'delete_op'
            }
        ]
};

listFormat: object = [
        {
            name: 'id',
            text: '#',
            width: 100
        },
        {
            name: 'first',
            text: 'first text',
            width: 100
        },
        {
             name: 'second',
             text: 'second text',
             width: 100
        }
        
];
```

#### the table will like this.
| id | first text | second text | operations |
| -------- | ----------- | ---- | ------- |
| `dataList[id]` |`dataList[first]`  | `dataList[second]`  | [edit_op]('#')   [delete_op]('#') |
| `dataList[id]` |`dataList[first]`  | `dataList[second]`  | [edit_op]('#')   [delete_op]('#') |
| `dataList[id]` |`dataList[first]`  | `dataList[second]`  | [edit_op]('#')   [delete_op]('#') |

- if you click op link and listen (op) , you will get this data.
```JavaScript
 onOperation(e) {
        // e: {item: item,op: name}
        // item is metadata, op is opitem's name
        switch (e.op) {
            case 'edit':
                break;
            case 'delete':
                break;
        }
    }
```

## Tag `[ng-sm-tag]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[type]` | the tag type, set different vlaue will show different theme (`primary` `info` `warning` `success` `danger`)| string | default |
| `[leftIcon]` | the tag left icon | string | - |
| `[rightIcon]` | the label right icon | string | - |
| `[isHover]` | mouse hover | boolean | false |
| `(leftIconClick)` | listen to click tag left icon  | EventEmitter | - |
| `(rightIconClick)` | listen to click tag right  icon  | EventEmitter | - |

```HTML
<ng-sm-tag></ng-sm-tag>
```

## Textarea `[ng-sm-textare]`

### API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| `[disabled]` | can be set to textarea disabled status | boolean | false |
| `[readonly]` | can be set to textarea readonly status | boolean | false |
| `[(ngModel)]` | to bind value | - | - |
| `[placeholder]` | can be set to textarea placeholder | string | - |
| `[rows]` | can be set to textarea row number | string | on |
| `(modelChange)` | listener to ng-model change event | EventEmitter | - |
| `(focus)` | listener to focus event | EventEmitter | - |
| `(blur)` | listener to blur  event | EventEmitter | - |

```HTML
<ng-sm-textarea [(ngModel)]="YOUR_MODEL">
</ng-sm-textarea>
```

## EventBus Service

### API

- `emit(eventName: string, data?: any)`  Trigger event.
- `on(eventName: string, func: any): string`  Bind event. Invoke it, will return the event id. And you can use it in off function.
- `off(eventName: string, id?: string)` Unbind event.

## Modal Service

### API

- `createModal(args: any, $alias?: string)` Invoke it, set component which is extend BaseModel or the components array.

#### how to use

```JavaScript
// example:
// step 1
import {Component, EventEmitter, Input, OnInit, Optional, Output, ViewChild} from '@angular/core';
import {BaseModal} from '../base-modal';
import {ModalContainerComponent} from '../modal-container/modal-container.component';

@Component({
    selector: 'ng-sm-modal-alert',
    templateUrl: './modal-alert.component.html',
    styleUrls: ['../styles/styles.scss','./modal-alert.component.scss']
})
export class ModalAlertComponent extends BaseModal implements OnInit {
    static $alias: string = 'alert';
    text: string = '';

    @Output() okCallback: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        super();
    }

    ngOnInit() {
    }

    modalCreated(opts: any) {
        Object.keys(opts).forEach(val => {
            this[val] = opts[val];
        });
    }

    closeModal() {
        this.close();
        this.okCallback.emit();
    }
}

//step 2
// add component in entryComponents
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalAlertComponent} from './modal-alert/modal-alert.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalAlertComponent,
    ],
    exports: [
        ModalAlertComponent,
    ],
    entryComponents: [
        ModalAlertComponent // here
    ]
})

export class ModalModule {
}

// step 3
// in you want to use it, you should:

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-sm-ui';

  constructor(private modalService: ModalService) {
    this.modalService.createModal(ModalAlertComponent);
  }

  useModal() {
    this.modalService.modal.alert({
      input: { // input prop is set it to component @Input 
        title: 'Warn',
        text: 'test1'
      },
      output: { // output prop is set it to component @Output
        okCallback: () => {
            console.log('ok~');
        } 
      }
    });
  }
}


```

## Storage Service

the localStorage and sessionStorage util service.

### API
- `setItem(key: string, val: any)`  -> localStorage/sessionStorage.setItem(...)
- `getItem(key: string)`  -> localStorage/sessionStorage.getItem(...) `PS: if no value, will return null`
- `removeItem(key: string) ` -> localStorage/sessionStorage.removeItem(...)
- `clear()` -> localStorage/sessionStorage.clear(...)
- `[get]length` -> localStorage/sessionStorage.length
- `key(num)` -> localStorage/sessionStorage.key(...)

