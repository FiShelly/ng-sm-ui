import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {Observable} from 'rxjs';
import {HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';
import {filter, last, map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MaterialService extends CommonService {

    public getList(url: string, data): Observable<any> {
        return this.hc.get<any>(url, {
            params: {
                limit: data.limit,
                offset: data.offset,
                keyword: data.keyword
            }
        });
    }

}
