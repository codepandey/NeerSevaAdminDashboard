import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from '../service/brand.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-brandimage',
  templateUrl: './add-brandimage.component.html',
  styleUrls: ['./add-brandimage.component.scss']
})
export class AddBrandimageComponent implements OnInit {
  imageUrl: string = '/assets/img/upload-icon-29';
  fileToUpload: File = null;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private brandService: BrandService) { }

  brands;
  addForm: FormGroup;
  submitted = false;
  selectedFile: File = null;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      UserImage: ['', Validators.required]
    });
   }


   handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
   }

   OnSubmit(Caption,Image) {
     this.brandService.addBrandImage(Caption.value, this.fileToUpload)
     .subscribe(data => {
       console.log('done');
      Caption.value = null;
      Image.value = null;
     });


   }


  // onSubmit() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile.name);
  //   this.submitted = true;
  //   if (this.addForm.valid) {
  //     // console.log(this.addForm.value);
  //     this.brandService.addBrandImage(this.addForm.value)
  //     .subscribe( data => {
  //       this.router.navigate(['list-brand']);
  //     });
  //   }
  // }
  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile.name);
  //   this.brandService.addBrandImage(this.brands)
  //   .subscribe(Response => {
  //     console.log(Response);
  //   });
  // }


  // onFileSelcted(event) {
  //   this.selectedFile = event.target.files[0] as File;
  // }

  // get f() { return this.addForm.controls; }

}
