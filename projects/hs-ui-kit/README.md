# <img src="https://gblobscdn.gitbook.com/spaces%2F-MESaD8WY3ggQLtBByXl%2Favatar-1597150668933.png?alt=media" alt="Hydrosphere.io logo" width="70"> HydroServing Ui Kit

UI Kit for the Hydrosphere.io project, containing the common UI components and integrated with the Storybook.

![](src/assets/images/Storybook.gif)

## Getting Started

1. Run the following command:
```
  npm install @hydrosphere/hs-ui-kit
```
2. Import `HsUiKitModule` in your main module.

**app.module.ts**
```
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HsUiKitModule } from '@hydrosphere/hs-ui-kit';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HsUiKitModule,
      // ...
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }
```

3. To add icons to your project include `IconsRegistryService` to providers of main module and register icons you need in the constructor.

**app.module.ts**
```
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HsUiKitModule, IconsRegistryService, hsIconsIconSearch } from '@hydrosphere/hs-ui-kit';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HsUiKitModule,
      // ...
    ],
    providers: [IconsRegistryService],
    bootstrap: [AppComponent]
  })
  export class AppModule {
    constructor(private iconRegistry: IconsRegistryService) {
      this.iconRegistry.registerIcons([hsIconsIconSearch]);
    }
  }
```
