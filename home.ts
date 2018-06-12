import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3001/api/';
 
@Component({
	selector: 'home-page',
	templateUrl: './home.html'
})

export class HomePage {
	public uploader:FileUploader = new FileUploader({url: URL});
	public hasDropZone:boolean = false;
	public hasAnotherDropZoneOver:boolean = false;

	public fileOverDropZone(e:any):void {
		this.hasDropZone = e;
	}

	public fileOverAnother(e:any):void {
		this.hasAnotherDropZoneOver = e;
	}
	
	public showCalculatedField(): void {
		var x = document.getElementById("hiddenCalculatedDiv");
		var y = document.getElementById("hiddenUploadDiv");
		if (x.style.display === "none") {
			x.style.display = "block";
			y.style.display = "none";
		
		} else {
			x.style.display = "none";
			y.style.display = "block";
			
		}
	}
	
	public parentDateFieldDataChanged(e:any){
		console.log(e);
		console.log(e.checked);
		var x = document.getElementById("hiddenCalculatedDiv");
		var y = document.getElementById("hiddenParentDateField");
		if (x.style.display === "none") {		
			y.style.display = "none";
		
		} else {
			y.style.display = "block";
			
		}
	}
	
	public hideParentDateField(): void {
		var x = document.getElementById("hiddenCalculatedDiv");
		var y = document.getElementById("hiddenParentDateField");
		if (x.style.display === "none") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public expandParentDateField(): void {
		var x = document.getElementById("hiddenParentDateField");
		var y = document.getElementById("hiddenParentDateDetails");
		if (x.style.display === "block") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public closeParentDateField(): void {
		var x = document.getElementById("hiddenParentDateField");
		var y = document.getElementById("hiddenParentDateDetails");
		if (x.style.display === "none") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public emailDomainFieldDataChanged(e:any){
		console.log(e);
		console.log(e.checked);
		var x = document.getElementById("hiddenCalculatedDiv");
		var y = document.getElementById("hiddenEmailDomainField");
		if (x.style.display === "none") {		
			y.style.display = "none";
		
		} else {
			y.style.display = "block";
			
		}
	}
	
	public hideEmailDomainField(): void {
		var x = document.getElementById("hiddenCalculatedDiv");
		var y = document.getElementById("hiddenEmailDomainField");
		if (x.style.display === "none") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public expandEmailDomainField(): void {
		var x = document.getElementById("hiddenEmailDomainField");
		var y = document.getElementById("hiddenEmailDomainDetails");
		if (x.style.display === "block") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public closeEmailDomainField(): void {
		var x = document.getElementById("hiddenEmailDomainField");
		var y = document.getElementById("hiddenEmailDomainDetails");
		if (x.style.display === "none") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public dateTimeFieldDataChanged(e:any){
		console.log(e);
		console.log(e.checked);
		var x = document.getElementById("hiddenCalculatedDiv");
		var y = document.getElementById("hiddenDateTimeField");
		if (x.style.display === "none") {		
			y.style.display = "none";
		
		} else {
			y.style.display = "block";
			
		}
	}
	
	public hideDateTimeField(): void {
		var x = document.getElementById("hiddenCalculatedDiv");
		var y = document.getElementById("hiddenDateTimeField");
		if (x.style.display === "none") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public expandDateTimeField(): void {
		var x = document.getElementById("hiddenDateTimeField");
		var y = document.getElementById("hiddenDateTimeDetails");
		if (x.style.display === "block") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public closeDateTimeField(): void {
		var x = document.getElementById("hiddenDateTimeField");
		var y = document.getElementById("hiddenDateTimeDetails");
		if (x.style.display === "none") {		
			y.style.display = "block";
		
		} else {
			y.style.display = "none";
			
		}
	}
	
	public DisplaySize(item:any): string {
		let b: number = 0;

		if (item && item.file)
			b = item.file.size;

		if (b < 1024)
			return b + " bytes";

		b /= 1024;								// convert to KB
		if (b < 1024)
			return b.toFixed(2) + " KB";

		b /= 1024;								// convert to MB
			return b.toFixed(2) + " MB";
		}
	}

