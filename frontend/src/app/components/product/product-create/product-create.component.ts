import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators } from '@angular/forms'
import { NodeWithI18n } from '@angular/compiler';
import { DatePipe } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}
interface Viatura {
  viatura: string;
  regfab: string;
}
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  foods: Food[] = [
    {value: 'viatura-1', viewValue: 'viatura 1'},
    {value: 'viatura-2', viewValue: 'viatura 2'},
    {value: 'viatura-3', viewValue: 'viatura 3'}
  ];

  viaturas: Viatura[] = [
    {viatura: 'viatura-1', regfab: 'BC-12922'},
    {viatura: 'viatura-2', regfab: 'bc34302'},
    {viatura: 'viatura-3', regfab: 'DC01-234'}
  ];

  regfab: string = ""
  data: DatePipe
  


  product: Product = {
  
    viatura: '',
    nomeMotorista: '',
    observacoes: '',
    regfab: '',
    missao: '',
    horarioSaida: '',
    horarioChegada: '',
    kmSaida: 0,
    kmChegada: 0,
    name: '',
    price: 0

  }
  
  formulario: FormGroup = new FormGroup({
    'name': new FormControl(null, [Validators.required]),
    'viatura': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zÀ-ú., -]{5,}')]),
    'regfab': new FormControl(null, [Validators.required]),
    'horarioSaida': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zÀ-ú., -]{5,}')]),
    'horarioChegada': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zÀ-ú., -]{5,}')]),
    'nomeMotorista': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zÀ-ú., -]{5,}')]),
    'kmSaida': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zÀ-ú., -]{5,}')]),
    'kmChegada': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zÀ-ú., -]{5,}')]),
    'observacoes': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern('[A-Za-zÀ-ú., -]{5,}')]),
    'missao': new FormControl(null, [Validators.required]),

  });
  constructor(private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

 
  createProduct() {

    console.log(this.formulario.value)
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

  }

  localizarViatura(viatura){
    
    console.log(viatura)
  }
  cadastrarMissao(){

    
  this.product = {
  
    viatura: this.formulario.value.viatura,
    nomeMotorista: this.formulario.value.nomeMotorista,
    observacoes: this.formulario.value.observacoes,
    regfab: this.formulario.value.regfab,
    missao: this.formulario.value.missao,
    horarioSaida: this.formulario.value.horarioSaida,
    horarioChegada: this.formulario.value.horarioChegada,
    kmSaida: this.formulario.value.kmSaida,
    kmChegada: this.formulario.value.kmChegada,
    name: this.formulario.value.name,
    price: this.formulario.value.price

  }

   this.createProduct()
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
