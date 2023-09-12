import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  formGroupProduct : FormGroup;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder
              ){

      this.formGroupProduct = formBuilder.group({ // para declarar o formulario
        name: [''],
        price: ['']
      });
 }

  ngOnInit(): void {
      this.productService.getProducts().subscribe(
        {
           next: products => this.products = products
        }
      )
  }

}






