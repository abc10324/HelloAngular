import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mrtstation',
  templateUrl: './mrtstation.component.html',
  styleUrls: ['./mrtstation.component.css']
})
export class MRTstationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  list = stationList;
  nav1 = '標題其一';
  nav2 = '標題其二';
  limit = 10;
  page = 1;

  pageUp(){
    this.page--;
  }

  pageTo(page : number){
    this.page = page;
  }

  pageDown(){
    this.page++;
  }

}

const stationList = [
  {'Station':'三重站','Destination':'南勢角站','UpdateTime':'2020-02-02T17:04:58.667'},{'Station':'士林站','Destination':'大安站','UpdateTime':'2020-02-02T17:05:04.83'},{'Station':'大安站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'大坪林站','Destination':'新店站','UpdateTime':'2020-02-02T17:04:42'},{'Station':'大直站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'小南門站','Destination':'松山站','UpdateTime':'2020-02-02T17:04:42'},{'Station':'中山國中站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'中山國中站','Destination':'動物園站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'中正紀念堂站','Destination':'大安站','UpdateTime':'2020-02-02T17:05:04.83'},{'Station':'中正紀念堂站','Destination':'淡水站','UpdateTime':'2020-02-02T17:05:04.83'},{'Station':'中正紀念堂站','Destination':'新店站','UpdateTime':'2020-02-02T17:04:42'},{'Station':'內湖站','Destination':'動物園站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'北門站','Destination':'新店站','UpdateTime':'2020-02-02T17:04:52.417'},{'Station':'古亭站','Destination':'松山站','UpdateTime':'2020-02-02T17:04:42'},{'Station':'台北小巨蛋站','Destination':'台電大樓站','UpdateTime':'2020-02-02T17:04:52.417'},{'Station':'台北車站','Destination':'亞東醫院站','UpdateTime':'2020-02-02T17:04:46.53'},{'Station':'台北車站','Destination':'象山站','UpdateTime':'2020-02-02T17:04:54.713'},{'Station':'民權西路站','Destination':'淡水站','UpdateTime':'2020-02-02T17:04:54.713'},{'Station':'石牌站','Destination':'北投站','UpdateTime':'2020-02-02T17:04:54.713'},{'Station':'行天宮站','Destination':'南勢角站','UpdateTime':'2020-02-02T17:04:48.493'},{'Station':'亞東醫院站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:05:06.64'},{'Station':'忠孝復興站','Destination':'動物園站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'忠孝新生站','Destination':'南勢角站','UpdateTime':'2020-02-02T17:04:48.493'},{'Station':'忠孝新生站','Destination':'頂埔站','UpdateTime':'2020-02-02T17:05:06.64'},{'Station':'忠孝新生站','Destination':'蘆洲站','UpdateTime':'2020-02-02T17:04:50.19'},{'Station':'明德站','Destination':'象山站','UpdateTime':'2020-02-02T17:05:04.83'},{'Station':'東門站','Destination':'北投站','UpdateTime':'2020-02-02T17:05:04.83'},{'Station':'板橋站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:56.39'},{'Station':'松山機場站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'南京三民站','Destination':'松山站','UpdateTime':'2020-02-02T17:04:42'},{'Station':'唭哩岸站','Destination':'大安站','UpdateTime':'2020-02-02T17:04:54.713'},{'Station':'復興崗站','Destination':'象山站','UpdateTime':'2020-02-02T17:05:04.83'},{'Station':'港墘站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'萬芳醫院站','Destination':'動物園站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'葫洲站','Destination':'動物園站','UpdateTime':'2020-02-02T17:04:57'},{'Station':'龍山寺站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:56.39'},{'Station':'雙連站','Destination':'大安站','UpdateTime':'2020-02-02T17:05:04.83'},{'Station':'關渡站','Destination':'淡水站','UpdateTime':'2020-02-02T17:04:54.713'},{'Station':'蘆洲站','Destination':'南勢角站','UpdateTime':'2020-02-02T17:04:39.807'},{'Station':'麟光站','Destination':'南港展覽館站','UpdateTime':'2020-02-02T17:04:57'}
];

