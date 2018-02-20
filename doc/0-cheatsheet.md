# ANGULAR 4 cheatsheet

## General stuff

App startup
1. main.ts
2. app.module.ts : boostrap AppComponent
3. app.component.ts : selector, template, style
index.html includes ```<app-root>``` selector which calls app.component.ts

Angular modifies the DOM at runtime
One app = several components

### Components

#### Creation
1. subfolder src/app
2. component class, ex: stuff.component.ts
3. template in @Component decorator along with selector and style.
4. component in app.module.ts declarations + import at the top of the file

#### Usage
<app-stuff> in app.component.html

##### CLI creation
```ng generate component stuff``` or ```ng g c stuff``` or if working with subfolders ```ng g c stuff/stuff-list```

##### @Component Decorator
* **template** to insert inline template
* **templateURL** to link template file
* **styleURL** to link CSS file
* **styles** array [] to insert inline styles in the component.ts file
* **selector**
    * 'app-stuff' = element ```<app-stuff>```
    * '[app-stuff]' = attribute ```<div app-stuff>```
    * '.app-stuff' = class ```<div class='app-stuff'>```

## Databinding

Each HTML element has
* properties
* events

See [Mozilla Dev Network](https://developer.mozilla.org/fr/)

### String interpolation
Properties are the in component.ts : 
**property: type = value;**

```
export class AppComponent {
  stuffId: number = 10;
  getStuffId() { return this.stuffId; }
}
```
Then to print stuffId in the template : ```{{ stuffId }}```

### Property binding

**Binds html element property to a component property : ```[html attribute]="componentVar"```**

```<input [disabled]='disableInput'>``` where disableInput is a property of the component.
```<input [disabled]='myVar === 0'>``` can also be an expression to evaluate.

### 2 ways databinding
Between the template and the component

1. ```import { FormsModule } from '@angular/forms';``` in app.module.ts
2. ```<input [(ngModel)]="componentVar">``` in template app.component.html

## Events
** Binds html element event to a component method : ```(event)="componentMethod()"```**
```<button (click)="OnClickDoSomething()">```

### Retrieve value on event
* In template ```(event)="classMethod($event)```
* In component ```classMethod(event: Event) { }```


### Events Communication
** In parent
* In template ```<app-child [inputEntry]="someVariable" (outputEvent)="someFunction($event)"> ```
* In component 
``` 
someFunction(event: string) {
...
}
``` 
** In child
* In component 
``` 
@Input() inputEntry: YourTypeEntry;
@Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

sendAnEvent() {
    const str = 'Hello Parent !';
    this.outputEvent.emit(str);
}
``` 

