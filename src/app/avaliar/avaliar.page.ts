import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-avaliar',
  templateUrl: './avaliar.page.html',
  styleUrls: ['./avaliar.page.scss'],
})
export class AvaliarPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Auto-Avaliação',
      message: 'O primeiro passo é fazer uma autoavaliação e pontuar quais são as suas soft skills fortes/fracas. Depois disso, vai precisar criar situações para exercitar o que tiver mais dificuldade. Por exemplo: Se você acha que sua oratória não é muito boa, ou seja, que não fala muito bem em público, vai precisar criar situações onde seja possível treinar isso.',
      buttons: ['Entendi!']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Avaliar Outras Pessoas',
      message: 'Se um candidato colocar no currículo que seu inglês é fluente, basta aplicar testes orais ou escritos para comprovar se a afirmação é verdadeira ou não. O mesmo vale para proficiência em softwares e outros conhecimentos específicos. Sendo assim, como é possível avaliar soft skills de maneira eficaz? Para isso, é necessária uma dedicação especial no momento da entrevista. Fazer as perguntas certas e prestar atenção nas respostas é fundamental para identificar se o candidato tem as características pessoais desejadas.',
      buttons: ['Entendi!']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

}
