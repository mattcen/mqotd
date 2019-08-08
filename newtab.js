function showQuote() {

  var quotes = [
    {
      'text': 'You educate a man; you educate a man. You educate a woman; you educate a generation.',
      'author': 'Brigham Young'
    },
    {
      'text': 'When a man gives his opinion, he\'s a man. When a woman gives her opinion, she\'s a bitch.',
      'author': 'Bette Davis'
    },
    {
      'text': 'I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.',
      'author': 'Jane Austen, Persuasion'
    },
    {
      'text': 'I\'m tough, I\'m ambitious, and I know exactly what I want. If that makes me a bitch, okay.',
      'author': 'Madonna'
    },
    {
      'text': 'A woman without a man is like a fish without a bicycle.',
      'author': 'Irina Dunn'
    },
    {
      'text': 'I myself have never been able to find out precisely what feminism is: I only know that people call me a feminist whenever I express sentiments that differentiate me from a doormat.',
      'author': 'Rebecca West'
    },
    {
      'text': 'Why do people say "grow some balls"? Balls are weak and sensitive. If you wanna be tough, grow a vagina. Those things can take a pounding.',
      'author': 'Sheng Wang'
    },
    {
      'text': 'Men are afraid that women will laugh at them. Women are afraid that men will kill them.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself',
      'author': 'Simone de Beauvoir'
    },
    {
      'text': 'I hate men who are afraid of women\'s strength.',
      'author': 'Anaïs Nin, Henry and June: From "A Journal of Love"--The Unexpurgated Diary of Anaïs Nin'
    },
    {
      'text': 'Feminism is the radical notion that women are human beings.',
      'author': 'Cheris Kramarae'
    },
    {
      'text': 'Ideally, what should be said to every child, repeatedly, throughout his or her school life is something like this: \'You are in the process of being indoctrinated. We have not yet evolved a system of education that is not a system of indoctrination. We are sorry, but it is the best we can do. What you are being taught here is an amalgam of current prejudice and the choices of this particular culture. The slightest look at history will show how impermanent these must be. You are being taught by people who have been able to accommodate themselves to a regime of thought laid down by their predecessors. It is a self-perpetuating system. Those of you who are more robust and individual than others will be encouraged to leave and find ways of educating yourself — educating your own judgements. Those that stay must remember, always, and all the time, that they are being moulded and patterned to fit into the narrow and particular needs of this particular society.',
      'author': 'Doris Lessing, The Golden Notebook'
    },
    {
      'text': 'It\'s not my responsibility to be beautiful. I\'m not alive for that purpose. My existence is not about how desirable you find me.',
      'author': 'Warsan Shire'
    },
    {
      'text': 'I know enough to know that no woman should ever marry a man who hated his mother.',
      'author': 'Martha Gellhorn, Selected Letters'
    },
    {
      'text': 'Men are from Earth, women are from Earth. Deal with it.',
      'author': 'George Carlin'
    },
    {
      'text': 'The thing women have yet to learn is nobody gives you power. You just take it.',
      'author': 'Roseanne Barr'
    },
    {
      'text': 'No woman gets an orgasm from shining the kitchen floor.',
      'author': 'Betty Friedan'
    },
    {
      'text': 'What’s the worst possible thing you can call a woman? Don’t hold back, now.',
      'author': 'Jessica Valenti, Full Frontal Feminism'
    },
    {
      'text': 'A feminist is anyone who recognizes the equality and full humanity of women and men.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'As long as she thinks of a man, nobody objects to a woman thinking.',
      'author': 'Virginia Woolf, Orlando'
    },
    {
      'text': 'She is free in her wildness, she is a wanderess, a drop of free water. She knows nothing of borders and cares nothing for rules or customs. \'Time\' for her isn’t something to fight against. Her life flows clean, with passion, like fresh water.',
      'author': 'Roman Payne'
    },
    {
      'text': 'We teach girls to shrink themselves, to make themselves smaller. We say to girls, you can have ambition, but not too much. You should aim to be successful, but not too successful. Otherwise, you would threaten the man. Because I am female, I am expected to aspire to marriage. I am expected to make my life choices always keeping in mind that marriage is the most important. Now marriage can be a source of joy and love and mutual support but why do we teach girls to aspire to marriage and we don’t teach boys the same? We raise girls to see each other as competitors not for jobs or accomplishments, which I think can be a good thing, but for the attention of men. We teach girls that they cannot be sexual beings in the way that boys are.',
      'author': 'Chimamanda Ngozi Adichie, We Should All Be Feminists'
    },
    {
      'text': 'He - and if there is a God, I am convinced he is a he, because no woman could or would ever fuck things up this badly.',
      'author': 'George Carlin'
    },
    {
      'text': 'If particular care and attention is not paid to the ladies, we are determined to foment a rebellion, and will not hold ourselves bound by any laws in which we have no voice or representation.',
      'author': 'Abigail Adams, The Letters of John and Abigail Adams'
    },
    {
      'text': 'She was free in her wildness. She was a wanderess, a drop of free water. She belonged to no man and to no city',
      'author': 'Roman Payne, The Wanderess'
    },
    {
      'text': 'There is a special place in hell for women who don\'t help other women."',
      'author': 'Madeleine Albright'
    },
    {
      'text': 'To terrify children with the image of hell, to consider women an inferior creation—is that good for the world?',
      'author': 'Christopher Hitchens'
    },
    {
      'text': 'Women have served all these centuries as looking glasses possessing the magic and delicious power of reflecting the figure of man at twice its natural size.',
      'author': 'Virginia Woolf, A Room of One\'s Own'
    },
    {
      'text': 'Equality is not a concept. It\'s not something we should be striving for. It\'s a necessity. Equality is like gravity. We need it to stand on this earth as men and women, and the misogyny that is in every culture is not a true part of the human condition. It is life out of balance, and that imbalance is sucking something out of the soul of every man and woman who\'s confronted with it. We need equality. Kinda now.',
      'author': 'Joss Whedon'
    },
    {
      'text': 'Responsibility to yourself means refusing to let others do your thinking, talking, and naming for you...it means that you do not treat your body as a commodity with which to purchase superficial intimacy or economic security; for our bodies to be treated as objects, our minds are in mortal danger. It means insisting that those to whom you give your friendship and love are able to respect your mind. It means being able to say, with Charlotte Bronte\'s Jane Eyre: "I have an inward treasure born with me, which can keep me alive if all the extraneous delights should be withheld or offered only at a price I cannot afford to give.',
      'author': 'Adrienne Rich'
    }
  ];

  var random_quote = quotes[Math.floor(Math.random() * quotes.length)];
  var quote_div = document.querySelector('div#content > blockquote');
  quote_text = random_quote['text'];
  quote_author = random_quote['author'];
  cite = document.createElement('cite');
  cite.appendChild(document.createTextNode(quote_author));
  quote_div.appendChild(document.createTextNode(quote_text));
  quote_div.appendChild(cite);
}
showQuote();
