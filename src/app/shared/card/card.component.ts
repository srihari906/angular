import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { cardToggle, cardClose } from './card-animation';
import { TranslateService } from '@ngx-translate/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [cardToggle, cardClose],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() headerContent: string;
  @Input() title: string;
  @Input() blockClass: string;
  @Input() cardClass: string;
  @Input() classHeader = false;
  @Input() isShowToggle = true;
  @Input() exportData = [];
  @Input() exportFileName: string = "fileName";
  @Input() exportHeader: any = {};
  cardToggle = 'expanded';
  cardClose = 'open';
  fullCard: string;
  fullCardIcon: string;
  loadCard = false;
  isCardToggled = true;
  cardLoad: string;
  constructor(public translateService: TranslateService) { }

  ngOnInit() {
  }

  toggleCard(event) {
    this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
  }

  closeCard(event) {
    this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
  }

  fullScreen(event) {
    this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
    this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
  }

  cardRefresh() {
    this.loadCard = true;
    this.cardLoad = 'card-load';
    setTimeout(() => {
      this.cardLoad = '';
      this.loadCard = false;
    }, 3000);
  }
  formattedDate(d) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${month}/${day}/${year}`;
  }
  getExportExcelUsingHeader() {
    var exportJson = [];
    var headers = this.exportHeader;
    this.exportData.forEach(item => {
      Object.keys(this.exportHeader).forEach(function (headerItem) {
        
      });
    });
  }
  getHeaderRow() {
    Object.keys(this.exportHeader).forEach(function (headerItem) {

    });
  }
  exportToExcel() {
    if (this.exportData.length > 0) {
      var options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: false,
        useBom: true,
        headers: true
      };
      this.exportData.forEach(item => {
        Object.keys(item).forEach(function (k) {
          console.log(k + ' - ' + item[k]);
          if (typeof (item[k]) == 'object' && (item[k] instanceof Date)) {
            var d = item[k];
            let month = String(d.getMonth() + 1);
            let day = String(d.getDate());
            const year = String(d.getFullYear());
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            item[k] = `${month}/${day}/${year}`;
          }
        });
      });
      new Angular2Csv(this.exportData, this.exportFileName, { headers: Object.keys(this.exportData[0]) });
    }
  }
  getTitle(key) {
    var title: any = this.translateService.get(key);
    return title == null ? key : title.value;
  }

}
