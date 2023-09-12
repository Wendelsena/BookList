
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

  save(){
    let product = this.formGroupProduct.value;
    this.productService.save(product).subscribe(
      {
        next: product =>{
        this.products.push(product);
        this.formGroupProduct.reset();
        }
      }
    )
  }

  delete(product: Product){
    this.productService.delete(product).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== product.id)
      }
    })
  }

}






