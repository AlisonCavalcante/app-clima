import { City } from './../../shared/models/City';
import { ClimaService } from './../../services/clima.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private climaService: ClimaService) {}

  city: City[] = [];
  metrycsKelvin: number = 273.15;
  ngOnInit(): void {}

  searchCity(cidade: string) {
    if (this.cityIsSearch(cidade) == false) {
      this.climaService
        .getClimaCity(cidade)
        .pipe(
          map((value) => {
            value.main.temp = Math.round(value.main.temp - this.metrycsKelvin);
            this.city.push(value);
          })
        )
        .subscribe(
          next => {

          },
          (error) =>{
            alert('Cidade Não Encontrada')
          }
        );
    } else {
      alert("Cidade já foi pesquisada!")
    }
  }

  cityIsSearch(cidade: string): boolean {
    let isSearch = false;
    if (this.city.length > 0) {
      this.city.map((value) => {
        if (value.name === cidade) {
          return (isSearch = true);
        }
        return isSearch;
      });
    }
    return isSearch;
  }
}
