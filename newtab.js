function showQuote() {

  var quotes = [
    {
      'text': 'Quote',
      'author': 'Author'
    },
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
      'text': 'A woman without a man is like a fish without a bicycle.',
      'author': 'Irina Dunn'
    },
    {
      'text': 'Do not live someone else\'s life and someone else\'s idea of what womanhood is. Womanhood is you.',
      'author': 'Viola Davis'
    },
    {
      'text': 'If it doesn\'t scare you, you\'re probably not dreaming big enough.',
      'author': 'Tory Burch'
    },
    {
      'text': 'Perfect is overrated. Perfect is boring.',
      'author': 'Tina Fey'
    },
    {
      'text': 'I don\'t know a woman alive who isn\'t courageous.',
      'author': 'Reese Witherspoon'
    },
    {
      'text': 'I don\'t have to be perfect. All I have to do is show up and enjoy the messy, imperfect, and beautiful journey of my life.',
      'author': 'Kerry Washington'
    },
    {
      'text': 'I didn\'t get there by wishing for it or hoping for it, but by working for it.',
      'author': 'Estée Lauder'
    },
    {
      'text': 'In order to be irreplaceable, one must always be different.',
      'author': 'Coco Chanel'
    },
    {
      'text': 'Real men treat women with dignity and give them the respect they deserve.',
      'author': 'Prince Harry'
    },
    {
      'text': 'If you want something said, ask a man; if you want something done, ask a woman.',
      'author': 'Margaret Thatcher'
    },
    {
      'text': 'I\'m tough. I\'m ambitious, and I know exactly what I want. If that makes me a bitch, okay.',
      'author': 'Madonna'
    },
    {
      'text': 'All men should be feminists. If men care about women\'s rights, the world will be a better place. We are better off when women are empowered.',
      'author': 'John Legend'
    },
    {
      'text': 'I definitely think the idea of friend zone is just men going, \'This woman won\'t have sex with me.\'',
      'author': 'Daniel Radcliffe'
    },
    {
      'text': 'Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'Women are complicated. Women are multifaceted. Not because women are crazy. But because people are crazy, and women happen to be people.',
      'author': 'Tavi Gevinson'
    },
    {
      'text': 'I myself have never been able to find out precisely what a feminist is. I only know that people call me a feminist whenever I express sentiments that differentiate me from a doormat.',
      'author': 'Rebecca West'
    },
    {
      'text': 'No woman gets an orgasm from shining the kitchen floor.',
      'author': 'Betty Friedan'
    },
    {
      'text': 'A woman is like a tea bag. You never know how strong she is until she gets in hot water.',
      'author': 'Eleanor Roosevelt'
    },
    {
      'text': 'A man told me that for a woman, I was very opinionated. I said, \'For a man, you\'re kind of ignorant.\'',
      'author': 'Anne Hathaway'
    },
    {
      'text': 'The most common way people give up their power is by thinking they don\'t have any.',
      'author': 'Alice Walker'
    },
    {
      'text': 'The most effective way to do it, is to do it.',
      'author': 'Amelia Earhart'
    },
    {
      'text': 'You can waste your lives drawing lines. Or you can live your life crossing them.',
      'author': 'Shonda Rhimes'
    },
    {
      'text': 'If I stop to kick every barking dog I am not going to get where I\'m going.',
      'author': 'Jackie Joyner-Kersee'
    },
    {
      'text': 'If you don\'t risk anything, you risk even more.',
      'author': 'Erica Jong'
    },
    {
      'text': 'If you don\'t like the road you\'re walking, start paving another one.',
      'author': 'Dolly Parton'
    },
    {
      'text': 'A champion is defined not by their wins, but by how many times they recover when they fall.',
      'author': 'Serena Williams'
    },
    {
      'text': 'I don\'t care what you think about me. I don\'t care about you at all.',
      'author': 'Coco Chanel'
    },
    {
      'text': 'Don\'t waste your energy trying to change opinions. Do your thing, and don\'t care if they like it.',
      'author': 'Tina Fey'
    },
    {
      'text': 'Fashion you can buy, but style you possess.',
      'author': 'Iris Apfel'
    },
    {
      'text': 'Flaws are my favorite part of people, usually.',
      'author': 'Emma Stone'
    },
    {
      'text': 'You have to accept your body. You may not love it all the way, but you have to be comfortable with it, comfortable knowing that that\'s your body.',
      'author': 'Rihanna'
    },
    {
      'text': 'The best way to not feel hopeless is to get up and do something.',
      'author': 'Barack Obama'
    },
    {
      'text': 'Sometimes you just have to put on lip gloss and pretend to be psyched.',
      'author': 'Mindy Kaling'
    },
    {
      'text': 'I want young people to know they matter, that they belong. So don\'t be afraid-you hear me, young people? Be focused. Be determined. Be hopeful. Be empowered.',
      'author': 'Michelle Obama'
    },
    {
      'text': 'Knowing what must be done does away with fear.',
      'author': 'Rosa Parks'
    },
    {
      'text': 'Above all, be the heroine of your life, not the victim.',
      'author': 'Nora Ephron'
    },
    {
      'text': 'If men don\'t have to be aggressive in order to be accepted, women won\'t feel compelled to be submissive. If men don\'t have control, women don\'t have to be controlled.',
      'author': 'Emma Watson'
    },
    {
      'text': 'Success isn\'t about how your life looks to others. It\'s about how it feels to you.',
      'author': 'Michelle Obama'
    },
    {
      'text': 'Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.',
      'author': 'Oprah'
    },
    {
      'text': 'Each person must live their life as a model for others.',
      'author': 'Rosa Parks'
    },
    {
      'text': 'Feminism is not a stick with which to beat other women. It\'s about freedom, it\'s about liberation, it\'s about equality.',
      'author': 'Emma Watson'
    },
    {
      'text': 'You can do one of two things: just shut up, which is something I don\'t find easy, or learn an awful lot very fast, which is what I tried to do.',
      'author': 'Jane Fonda'
    },
    {
      'text': 'Don\'t compromise yourself. You are all you\'ve got.',
      'author': 'Janis Joplin'
    },
    {
      'text': 'Never doubt that a small group of thoughtful committed citizens can change the world. Indeed, it is the only thing that ever has.',
      'author': 'Margaret Mead'
    },
    {
      'text': 'Don\'t let anyone tell you you\'re weak because you\'re a woman.',
      'author': 'Mary Kom'
    },
    {
      'text': 'In the future, there will be no female leaders. There will be just leaders.',
      'author': 'Sheryl Sandberg'
    },
    {
      'text': 'We need to stop buying into the myth about gender equality. It isn\'t a reality yet.',
      'author': 'Beyoncé'
    },
    {
      'text': 'Feet, what do I need you for when I have wings to fly?',
      'author': 'Frida Kahlo'
    },
    {
      'text': 'At 70 years old if I could give my younger self one piece of advice, it would be to use the word \'f-k off\' much more frequently.',
      'author': 'Helen Mirren'
    },
    {
      'text': 'Telling our stories, first to ourselves and then to one another and the world, is a revolutionary act.',
      'author': 'Janet Mock'
    },
    {
      'text': 'I have a brain and a uterus, and I use both.',
      'author': 'Patricia Schroeder'
    },
    {
      'text': 'My dad always said, \'Don\'t fit into the glass slipper like Cinderella did, shatter the glass ceiling.\'',
      'author': 'Priyanka Chopra'
    },
    {
      'text': 'It takes years as a woman to unlearn what you have been taught to be sorry for. It takes years to find your voice and your real estate.',
      'author': 'Amy Poehler'
    },
    {
      'text': 'Honoring our sexuality as women is a messy, messy business, but if we don\'t try, what do we become?',
      'author': 'Emily Ratajkowski'
    },
    {
      'text': 'Whisky, gambling, and Ferraris are better than housework.',
      'author': 'Françoise Sagan'
    },
    {
      'text': 'Dreaming, after all, is a form of planning.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'It will be great when it\'s not such a big deal when a woman does a good job.',
      'author': 'Susan Sarandon'
    },
    {
      'text': 'Men don\'t age better than women, they\'re just allowed to age.',
      'author': 'Carrie Fisher'
    },
    {
      'text': 'A girl should be two things: who and what she wants.',
      'author': 'Coco Chanel'
    },
    {
      'text': 'I want every little girl who\'s told she\'s bossy to be told instead she has leadership skills.',
      'author': 'Sheryl Sandberg'
    },
    {
      'text': 'Racism should never have happened and so you don\'t get a cookie for reducing it.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'Some people ask: “Why the word feminist? Why not just say you are a believer in human rights, or something like that?” Because that would be dishonest. Feminism is, of course, part of human rights in general-but to choose to use the vague expression human rights is to deny the specific and particular problem of gender. It would be a way of pretending that it was not women who have, for centuries, been excluded. It would be a way of denying that the problem of gender targets women.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'I have chosen to no longer be apologetic for my femaleness and my femininity. And I want to be respected in all of my femaleness because I deserve to be.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'A woman at a certain age who is unmarried, our society teaches her to see it as a deep personal failure. And a man, after a certain age isn’t married, we just think he hasn’t come around to making his pick.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'Race doesn\'t really exist for you because it has never been a barrier. Black folks don\'t have that choice.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'Many stories matter. Stories have been used to dispossess and to malign. But stories can also be used to empower, and to humanize. Stories can break the dignity of a people. But stories can also repair that broken dignity.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'My own definition is a feminist is a man or a woman who says, yes, there’s a problem with gender as it is today and we must fix it, we must do better. All of us, women and men, must do better.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'Teach her that if you criticize X in women but do not criticize X in men, then you do not have a problem with X, you have a problem with women.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'Masculinity is a hard, small cage, and we put boys inside this cage.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'She rested her head against his and felt, for the first time, what she would often feel with him: a self-affection. He made her like herself.',
      'author': 'Chimamanda Ngozi Adichie'
    },
    {
      'text': 'If there\'s a book that you want to read, but it hasn\'t been written yet, then you must write it.',
      'author': 'Toni Morrison'
    },
    {
      'text': 'Definitions belong to the definers, not the defined.',
      'author': 'Toni Morrison'
    },
    {
      'text': 'Don\'t ever think I fell for you, or fell over you. I didn\'t fall in love, I rose in it.',
      'author': 'Toni Morrison'
    },
    {
      'text': 'In this country American means white. Everybody else has to hyphenate.',
      'author': 'Toni Morrison'
    },
    {
      'text': 'If I didn\'t define myself for myself, I would be crunched into other people\'s fantasies for me and eaten alive.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'I am not free while any woman is unfree, even when her shackles are very different from my own.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'I have come to believe over and over again that what is most important to me must be spoken, made verbal and shared, even at the risk of having it bruised or misunderstood.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'For the master’s tools will never dismantle the master’s house. They may allow us to temporarily beat him at his own game, but they will never enable us to bring about genuine change. Racism and homophobia are real conditions of all our lives in this place and time. I urge each one of us here to reach down into that deep place of knowledge inside herself and touch that terror and loathing of any difference that lives here. See whose face it wears. Then the personal as the political can begin to illuminate all our choices.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'There is no such thing as a single-issue struggle because we do not live single-issue lives.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Revolution is not a one time event.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Pain is important: how we evade it, how we succumb to it, how we deal with it, how we transcend it.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Our feelings are our most genuine paths to knowledge.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'My silences had not protected me. Your silence will not protect you. But for every real word spoken, for every attempt I had ever made to speak those truths for which I am still seeking, I had made contact with other women while we examined the words to fit a world in which we all believed, bridging our differences.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Black and Third World people are expected to educate white people as to our humanity. Women are expected to educate men. Lesbians and gay men are expected to educate the heterosexual world. The oppressors maintain their position and evade their responsibility for their own actions. There is a constant drain of energy which might be better used in redefining ourselves and devising realistic scenarios for altering the present and constructing the future.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'I am deliberate and afraid of nothing.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'I have a duty to speak the truth as I see it and share not just my triumphs, not just the things that felt good, but the pain, the intense, often unmitigated pain. It is important to share how I know survival is survival and not just a walk throught the rain.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Unless one lives and loves in the trenches, it is difficult to remember that the war against dehumanization is ceaseless.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Without community, there is no liberation.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'We have been raised to fear the yes within ourselves, our deepest cravings.',
      'author': 'Audre Lorde'
    },
    {
      'text': 'Radical simply means "grasping things at the root.',
      'author': 'Angela Davis'
    },
    {
      'text': 'I am no longer accepting the things I cannot change. I am changing the things I cannot accept.',
      'author': 'Angela Davis'
    },
    {
      'text': 'The idea of freedom is inspiring. But what does it mean? If you are free in a political sense but have no food, what\'s that? The freedom to starve?',
      'author': 'Angela Davis'
    },
    {
      'text': '[Prison] relieves us of the responsibility of seriously engaging with the problems of our society, especially those produced by racism and, increasingly, global capitalism.',
      'author': 'Angela Davis'
    },
    {
      'text': 'We have to talk about liberating minds as well as liberating society.',
      'author': 'Angela Davis'
    },
    {
      'text': 'If they come for me in the morning, they will come for you in the night.',
      'author': 'Angela Davis'
    },
    {
      'text': 'You have to act as if it were possible to radically transform the world. And you have to do it all the time.',
      'author': 'Angela Davis'
    },
    {
      'text': 'When Obama was elected president, a prisoner said “one black man in the White House doesn’t make up for one million black men in the Big House.',
      'author': 'Angela Davis'
    },
    {
      'text': 'Sometimes we have to do the work even though we don\'t yet see a glimmer on the horizon that it\'s actually going to be possible.',
      'author': 'Angela Davis'
    },
    {
      'text': 'We know the road to freedom has always been stalked by death.',
      'author': 'Angela Davis'
    },
    {
      'text': 'In a racist society it is not enough to be non-racist, we must be anti-racist.',
      'author': 'Angela Davis'
    },
    {
      'text': 'If we do not know how to meaningfully talk about racism, our actions will move in misleading directions.',
      'author': 'Angela Davis'
    },
    {
      'text': 'But there’s a message there for everyone and it is that people can unite, that democracy from below can challenge oligarchy, that imprisoned migrants can be freed, that fascism can be overcome, and that equality is emancipatory',
      'author': 'Angela Davis'
    },
    {
      'text': 'I don\'t think we have any alternative other than remaining optimistic. Optimism is an absolute necessity, even if it\'s only optimism of the will, as Gramsci said, and pessimism of the intellect.',
      'author': 'Angela Davis'
    },
    {
      'text': 'I feel that if we don\'t take seriously the ways in which racism is embedded in structures of institutions, if we assume that there must be an identifiable racist who is the perpetrator, then we won\'t ever succeed in eradicating racism.',
      'author': 'Angela Davis'
    },
    {
      'text': 'The roots of sexism and homophobia are found in the same economic and political institutions that serve as the foundation of racism in this country and, more often than not, the same extremist circles that inflict violence on people of color are responsible for the eruptions of violence inspired by sexist and homophobic biases. Our political activism must clearly manifest our understanding of these connections.',
      'author': 'Angela Davis'
    },
    {
      'text': 'A feminist is anyone who recognizes the equality and full humanity of women and men.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Men should think twice before making widowhood women\'s only path to power.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Women may be the one group that grows more radical with age.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Once we give up searching for approval we often find it easier to earn respect.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'We\'ve begun to raise daughters more like sons... but few have the courage to raise our sons more like our daughters.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Feminism has never been about getting a job for one woman. It\'s about making life more fair for women everywhere. It\'s not about a piece of the existing pie; there are too many of us for that. It\'s about baking a new pie.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Any woman who chooses to behave like a full human being should be warned that the armies of the status quo will treat her as something of a dirty joke . . . She will need her sisterhood.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'We are becoming the men we wanted to marry',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'I have yet to hear a man ask for advice on how to combine marriage and a career.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Empathy is the most radical of human emotions.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'I myself cried when I got angry, then became unable to explain why I was angry in the first place. Later I would discover this was endemic among female human beings. Anger is supposed to be "unfeminine" so we suppress it -until it overflows. I could see that not speaking up made my mother feel worse. This was my first hint of the truism that depression is anger turned inward; thus women are twice as likely to be depressed.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'we are the women our parents warned us against, and we are proud',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'The first problem for all of us, men and women, is not to learn but to unlearn.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Women have two choices: Either she\'s a feminist or a masochist.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'A pedestal is as much a prison as any small, confined space.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Women are always saying,"We can do anything that men can do." But Men should be saying,"We can do anything that women can do.',
      'author': 'Gloria Steinem'
    },
    {
      'text': 'Nolite te bastardes carborundorum. Don\'t let the bastards grind you down.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'Men are afraid that women will laugh at them. Women are afraid that men will kill them.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'Another belief of mine: that everyone else my age is an adult, whereas I am merely in disguise.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'Ignoring isn’t the same as ignorance, you have to work at it.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'Better never means better for everyone... It always means worse, for some.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'Stupidity is the same as evil if you judge by the results.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'A rat in a maze is free to go anywhere, as long as it stays inside the maze.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'You can only be jealous of someone who has something you think you ought to have yourself.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'We still think of a powerful man as a born leader and a powerful woman as an anomaly.',
      'author': 'Margaret Atwood'
    },
    {
      'text': 'I would have girls regard themselves not as adjectives but as nouns.',
      'author': 'Elizabeth Cady Stanton'
    },
    {
      'text': 'Independence is happiness.',
      'author': 'Susan B. Anthony'
    },
    {
      'text': 'I think the degree of a nation’s civilization may be measured by the degree of enlightenment of its women.',
      'author': 'Helen Keller'
    },
    {
      'text': 'The way to right wrongs is to turn the light of truth upon them.',
      'author': 'Ida B. Wells.'
    },
    {
      'text': 'We want rights. The flour-merchant, the house-builder, and the postman charge us no less on account of our sex; but when we endeavor to earn money to pay all these, then, indeed, we find the difference.',
      'author': 'Lucy Stone'
    },
    {
      'text': 'Social advance depends as much upon the process through which it is secured as upon the result itself.',
      'author': 'Jane Addams'
    },
    {
      'text': 'I do not believe that women are better than men. We have not wrecked railroads, nor corrupted legislature, nor done many unholy things that men have done; but then we must remember that we have not had the chance.',
      'author': 'Jane Addams.'
    },
    {
      'text': 'A gentleman opposed to their enfranchisement once said to me, ‘Women have never produced anything of any value to the world.’ I told him the chief product of the women had been the men, and left it to him to decide whether the product was of any value.',
      'author': 'Anna Howard Shaw'
    },
    {
      'text': 'The world has never yet seen a truly great and virtuous nation, because in the degradation of women, the very fountains of life are poisoned at their source.',
      'author': 'Elizabeth Cady Stanton'
    },
    {
      'text': 'Life shrinks or expands in proportion to one\'s courage.',
      'author': 'Anaïs Nin'
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
