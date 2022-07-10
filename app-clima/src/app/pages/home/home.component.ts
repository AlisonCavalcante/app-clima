import { City } from './../../shared/models/City';
import { ClimaService } from './../../services/clima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private climaService: ClimaService) {}

  city!: City;
  ngOnInit(): void {}

  searchCity(cidade: string) {
    this.climaService.getClimaCity(cidade).subscribe((res) => {
      this.city = res;
      console.log(this.city.sys.country)
    });
  }
}
