import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Parser } from 'xml2js';

@Injectable()
export class ShippingRateService {

  httpOptions = {
    // headers: new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    // })
  };
  constructor(
    private http: Http
  ) { }
  
  // url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx';
  url = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=74380150&sCepDestino=43810040&nVlPeso=5&nCdFormato=1&nVlComprimento=16&nVlAltura=5&nVlLargura=15&nVlDiametro=0&sCdMaoPropria=s&nVlValorDeclarado=200&sCdAvisoRecebimento=n&StrRetorno=xml&nCdServico=40010,41106`;
  
  params = {
    'nCdEmpresa': '',
    'sDsSenha': '',
    'sCepOrigem': '74380150',
    'sCepDestino': '43810040',
    'nVlPeso': '5',
    'nCdFormato': '1',
    'nVlComprimento': '16',
    'nVlAltura': '5',
    'nVlLargura': '15',
    'nVlDiametro': '0',
    'sCdMaoPropria': 's',
    'nVlValorDeclarado': '200',
    'sCdAvisoRecebimento': 'n',
    'StrRetorno': 'xml',
    'nCdServico': '40010,41106'
  };


  getShippingRates() {
    return new Promise((resolve, reject) => {
      
      let headers = new Headers();
      headers.append('Authorization', 'IUSHAIUHEiuhsa');
      let opts = new RequestOptions();
      opts.headers = headers;
      this.http.get(this.url, opts).subscribe(data => {
        console.log(data);
        resolve(data);
      });
    });
  }
}
