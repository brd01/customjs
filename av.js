	  function startz(){

		
		console.log('...web');
/*		document.querySelectorAll('.ftr-partners-row-inner-bc a').forEach(e => e.remove());
		document.querySelector('#root > div.layout-footer-holder-bc > div > div.footer-title').innerHTML='UYGULAMALAR & LİSANS';
		document.querySelector('#root > div.layout-footer-holder-bc > div > div.regulation-partner > div > div').appendChild(document.getElementById('seal-9d78228f-cd22-4945-8fcb-46888805eeb9'));
		document.querySelector('#root > div.layout-footer-holder-bc > div > div.regulation-partner > div > div').innerHTML+=
		'<a href="https://prensbet.app/"><img src="https://prensdepo.com/ios.webp"></a><a href="https://prensbet.app/"><img src="https://prensdepo.com/android.webp"></a>';*/

		var z = document.createElement('div');
		z.innerHTML = '<div id="mqdisplay"><div class="marquee"><div class="img1"><img class="mqimg" src="https://cmsbetconstruct.com/storage/medias/avvabet-18751834/media_18751834_de1a139f723fe0220ddf23bf4b83ab16.png" alt=""> Güncel adresimiz <span><span>www.xxx.com</span></span>\'dur. giriş adresi her zaman sıralı olarak ilerlemektedir. <img class="mqimg" src="https://cmsbetconstruct.com/storage/medias/Lejonbet/media_706_e76be44005b0f8defd523c4a31c6596b.png" alt=""> Pagcor lisansı kalite ve güvencesi! <img class="mqimg" src="https://cmsbetconstruct.com/storage/medias/avvabet-18751834/media_18751834_de1a139f723fe0220ddf23bf4b83ab16.png" alt=""> ..</div> </div></div>';
		document.querySelector('.layout-header-holder-bc').appendChild(z);
			

		var forfooter = document.querySelector("#root > div.layout-footer-holder-bc > div > div.regulation-partner > div > div:nth-child(2)")
		document.querySelector("#root > div.layout-footer-holder-bc > div > div.regulation-partner > div > div.ftr-partners-row-inner-bc.partners-logo-scroll").appendChild(forfooter);


	  }


		function startzmobile(){

		
		console.log('....mob');
		/*document.querySelectorAll('.ftr-partners-row-inner-bc a').forEach(e => e.remove());
		document.querySelector('#root > div.layout-footer-holder-bc > div > div.footer-title').innerHTML='UYGULAMALAR & LİSANS';
		document.querySelector('#root > div.layout-footer-holder-bc > div > div.regulation-partner > div > div').appendChild(document.getElementById('seal-9d78228f-cd22-4945-8fcb-46888805eeb9'));
		document.querySelector('#root > div.layout-footer-holder-bc > div > div.regulation-partner > div > div').innerHTML+=
		'<a href="https://prensbet.app/"><img src="https://prensdepo.com/ios.webp"></a><a href="https://prensbet.app/"><img src="https://prensdepo.com/android.webp"></a>';
		*/


		/*document.querySelector("#root > div.layout-footer-holder-bc > div > div.ftr-partners-row-bc > div").appendChild(document.getElementById('seal-9d78228f-cd22-4945-8fcb-46888805eeb9'));
		

		document.querySelector("#seal-9d78228f-cd22-4945-8fcb-46888805eeb9").style.cssText += 'position: absolute;top: 51px;';
		document.querySelector("#root > div.layout-footer-holder-bc > div > div.ftr-partners-row-bc > div").style.cssText += 'height: 150px;position: relative;';

		document.querySelector("#root > div.layout-footer-holder-bc > div > div.ftr-partners-row-bc > div").innerHTML+=
		'<a href="https://prensbet.app/"><img class="ftr-partners-r-img" src="https://prensdepo.com/ios.webp"></a><a href="https://prensbet.app/"><img class="ftr-partners-r-img" src="https://prensdepo.com/android.webp"></a>';*/

		var z = document.createElement('div');
		z.innerHTML = '<div id="mqdisplay"><div class="marquee"><div class="img1"><img class="mqimg" src="https://cmsbetconstruct.com/storage/medias/avvabet-18751834/media_18751834_de1a139f723fe0220ddf23bf4b83ab16.png" alt=""> Güncel adresimiz <span><span>www.xxx.com</span></span>\'dur. giriş adresi her zaman sıralı olarak ilerlemektedir. <img class="mqimg" src="https://cmsbetconstruct.com/storage/medias/Lejonbet/media_706_e76be44005b0f8defd523c4a31c6596b.png" alt=""> Pagcor lisansı kalite ve güvencesi! <img class="mqimg" src="https://cmsbetconstruct.com/storage/medias/avvabet-18751834/media_18751834_de1a139f723fe0220ddf23bf4b83ab16.png" alt=""> .. </div> </div></div>';
		document.querySelector('.header-bc').appendChild(z);
			
	  }


  
  function bul(){

		if(document.querySelector('#root > div.layout-footer-holder-bc > div > div.footer-title')) {

		startz();
		clearInterval(myInterval);
		console.log('ç');

		}

		if(document.querySelector("#root > div.layout-footer-holder-bc > div > div.ftr-payments-row-bc")) {

		startzmobile();
		clearInterval(myInterval);
		console.log('mobile');

		}

  }

const myInterval = setInterval(bul, 1000);
