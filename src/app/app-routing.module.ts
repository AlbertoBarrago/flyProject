import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'progetto', loadChildren: './progetto/progetto.module#ProgettoPageModule' },
  { path: 'esibizione', loadChildren: './esibizione/esibizione.module#EsibizionePageModule' },
  { path: 'performance', loadChildren: './performance/performance.module#PerformancePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
