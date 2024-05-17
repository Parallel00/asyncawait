$(function () {
  let URL = 'https://deckofcardsapi.com/api/deck';
  let deckId = null;
  let $btn = $('button');
  let $cardArea = $('#cards');
  let crdOne = null;
  
  async function first() {
    let crdInfo = await $.getJSON(`${URL}/new/draw/`);
    let { suit, num } = crdInfo.cards[0];
    console.log(`${num.toLowerCase()} of ${suit.toLowerCase()}`);
  }
  
  async function second() {
    let frsCrd = await $.getJSON(`${URL}/new/draw/`);
    let dcId = frsCrd.deck_id;
    let secCrd = await $.getJSON(`${URL}/${deckId}/draw/`);
    [frdCrd, secCrd].forEach(card => {
      let { suit, value } = card.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
  }

  async function third() {
    let dkDt = await $.getJSON(`${URL}/new/shuffle/`);
    $btn.show().on('click', async function() {
      let cDt = await $.getJSON(`${URL}/${dkDt.deck_id}/draw/`);
      let imgg = cDt.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randX = Math.random() * 40 - 20;
      let randY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: imgg,
          css: {
            transform: `translate(${randX}px, ${randY}px) rotate(${angle}deg)`
          }
        })
      );
      if (cDt.remaining === 0) $btn.remove();
    });
  }
  third();
});
