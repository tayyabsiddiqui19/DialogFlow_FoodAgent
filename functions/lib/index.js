"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const dialogflow_fulfillment_1 = require("dialogflow-fulfillment");
const imageUrl0 = 'https://www.ocf.berkeley.edu/~sather/wp-content/uploads/2018/01/food--1200x600.jpg'; // Getting Started
const imageUrl1 = 'https://www.supermeal.pk/ext-resources/cropped-images/000/051/000051964_chicnken-piiza.jpg'; // Pizza
const imageUrl2 = 'http://az866755.vo.msecnd.net/product/1519793728406-product.jpeg'; // Zinger
const imageUrl3 = 'https://media4.s-nbcnews.com/i/newscms/2017_05/1192767/food-jennifer-hill-booker-bbq-cola-skewers-deviled-eggs-tease-today-170203-01_c1624e8f77b65c6754561d7cde96da03.jpg'; // BBQ
const imageUrl4 = 'https://i.ytimg.com/vi/qAqqrpNpsuo/maxresdefault.jpg'; // Ice Cream
const imageUrl5 = 'https://res.cloudinary.com/jpress/image/fetch/c_fill,f_auto,h_505,q_auto:eco,w_960/https://inews.co.uk/wp-content/uploads/2016/05/Fizzy-3-e1463756804378.jpg'; // Drinks
const imageUrlPizzaMenu1 = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg";
const imageUrlPizzaMenu2 = "https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg";
const imageUrlZingerMenu1 = "https://i.ytimg.com/vi/j5dQslFL6ek/maxresdefault.jpg";
const imageUrlZingerMenu2 = "https://www.zaiqatv.com.pk/wp-content/uploads/2016/03/zinger-kb.jpg";
const imageUrlBBQMenu1 = "https://www.zestpj.com/wp-content/uploads/2017/03/BBQ-Night_600x300-02.jpg";
const imageUrlBBQMenu2 = "https://d1qcpzk2u1223x.cloudfront.net/20180324025142/7-reasons-to-clean-your-bbq-grill-optimized.jpg";
const imageUrliceCreamMenu1 = "https://www.thedenizen.co.nz/wp-content/uploads/2017/12/Icecream.jpg";
const imageUrliceCreamMenu2 = "https://images.pexels.com/photos/209424/pexels-photo-209424.jpeg?auto=compress&cs=tinysrgb&h=350";
const imageUrlDrinkMenu1 = "https://citrusvb.com/application/files/1914/9971/6379/drinks.jpg";
const imageUrlDrinkMenu2 = "http://www.kraftrecipes.com/-/media/assets/2018-spring/citrus-spritzer-211672-642x428.jpg?db=web&h=428&w=642&la=en&hash=8BD380120CF3729CD1657E3D9DB27735A92422AC";
// Websites
const linkUrl0 = 'https://www.google.com/'; // Getting Started
const linkUrl1 = 'https://www.gmail.com/'; // Pizza 1
const linkUrl2 = 'https://www.gmail.com/'; // Pizza 2
const linkUrl3 = 'https://www.fb.com/'; // Zinger 1
const linkUrl4 = 'https://www.fb.com/'; // Zinger 2
const linkUrl5 = 'https://www.twitter.com/'; // BBQ 1
const linkUrl6 = 'https://www.twitter.com/'; // BBQ 2
const linkUrl7 = 'https://www.linkedin.com/'; // Ice Cream 1
const linkUrl8 = 'https://www.linkedin.com/'; // Ice Cream 2
const linkUrl9 = 'https://www.fiverr.com/'; // Drink 1
const linkUrl10 = 'https://www.fiverr.com/'; // Drink 2
exports.fulfillment = functions.https.onRequest((request, response) => {
    const agent1 = new dialogflow_fulfillment_1.WebhookClient({ request, response });
    // Firebase Log details
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
    // Run the proper handler based on the matched Dialogflow intent
    const intentMap = new Map();
    // List of intents
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('Getting Start', gettingStart);
    intentMap.set('Pizza Menu', pizzaMenu);
    intentMap.set('Zinger Menu', zingerMenu);
    intentMap.set('BBQ Menu', bbqMenu);
    intentMap.set('Ice Cream Menu', iceCreamMenu);
    intentMap.set('Drink Menu', drinkMenu);
    intentMap.set('Place an Order', placeAnOrder);
    // if requests for intents other than the default welcome and default fallback
    // is from the Google Assistant use the `googleAssistantOther` function
    // otherwise use the `other` function
    agent1.handleRequest(intentMap);
    // List of Intents functions
    // Fallback Intent Start
    function fallback(agent) {
        agent.add(`I'm sorry, can you try again?`);
    }
    // Fallback Intent End
    // Place an Order Intent Start
    function placeAnOrder(agent) {
        agent.add(`Your order is placed.`);
        agent.add(`Thanks for visitng our Store`);
    }
    // Place an Order Intent End
    // Welcome Intent Start
    function welcome(agent) {
        agent.add(`Welcome to my Food Store!`);
        agent.add(`Hi, I am your food Agent!`);
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Welcome to my Food Store`,
            imageUrl: imageUrl0,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: `Show me the Menu`,
            buttonUrl: linkUrl0
        }));
        agent.add(new dialogflow_fulfillment_1.Suggestion("Getting Start"));
    }
    // Welcome Intent Close
    // Getting Start Intent Start
    function gettingStart(agent) {
        agent.add(`Checkout the MENU Card`);
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 1 : Pizza`,
            imageUrl: imageUrl1,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Show me the Menu',
            // buttonUrl: linkUrl1 // for url
            buttonUrl: `Pizza Menu` // for text postback
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 2 : Zinger`,
            imageUrl: imageUrl2,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Show me the Menu',
            buttonUrl: `Zinger Menu`
            // buttonUrl: linkUrl2
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 3 : BBQ`,
            imageUrl: imageUrl3,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Show me the Menu',
            buttonUrl: `BBQ Menu`
            // buttonUrl: linkUrl3
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 4 : Ice Cream`,
            imageUrl: imageUrl4,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Show me the Menu',
            buttonUrl: `Ice Cream Menu`
            // buttonUrl: linkUrl4
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 5 : Drinks`,
            imageUrl: imageUrl5,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Show me the Menu',
            buttonUrl: `Drink Menu`
            //buttonUrl: linkUrl5
        }));
        // agent.add(new Suggestion("Pizza Menu"));
        // agent.add(new Suggestion("Zinger Menu"));
        // agent.add(new Suggestion("BBQ Menu"));
        // agent.add(new Suggestion("Ice Cream Menu"));
        // agent.add(new Suggestion("Drinks Menu"));
    }
    // Getting Start Intent Close
    // Pizza Menu Start
    function pizzaMenu(agent) {
        agent.add(`Checkout the Pizza MENU Card`);
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 1 : Pizza No 1`,
            imageUrl: imageUrlPizzaMenu1,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl1
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 2 : Pizza No 2`,
            imageUrl: imageUrlPizzaMenu2,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl2
        }));
    }
    // Pizza Menu End
    // Zinger Menu Start
    function zingerMenu(agent) {
        agent.add(`Checkout the Zinger MENU Card`);
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 1 : Zinger No 1`,
            imageUrl: imageUrlZingerMenu1,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl3
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 2 : Zinger No 2`,
            imageUrl: imageUrlZingerMenu2,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl4
        }));
    }
    // Zinger Menu End
    // BBQ Menu Start
    function bbqMenu(agent) {
        agent.add(`Checkout the BBQ MENU Card`);
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 1 : BBQ No 1`,
            imageUrl: imageUrlBBQMenu1,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl5
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 2 : BBQ No 2`,
            imageUrl: imageUrlBBQMenu2,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl6
        }));
    }
    // BBQ Menu End
    // Ice Cream Menu Start 
    function iceCreamMenu(agent) {
        agent.add(`Checkout the Ice Cream MENU Card`);
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 1 : Ice Cream No 1`,
            imageUrl: imageUrliceCreamMenu1,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl7
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 2 : Ice Cream No 2`,
            imageUrl: imageUrliceCreamMenu2,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl8
        }));
    }
    // Ice Cream Menu End
    // Drink Menu Start
    function drinkMenu(agent) {
        agent.add(`Checkout the Pizza MENU Card`);
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 1 : Drink No 1`,
            imageUrl: imageUrlDrinkMenu1,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl9
        }));
        agent.add(new dialogflow_fulfillment_1.Card({
            title: `Menu 2 : Drink No 2`,
            imageUrl: imageUrlDrinkMenu2,
            //text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Place an Order',
            buttonUrl: "Place an Order" //linkUrl10
        }));
    }
    // Drink Menu End
});
//# sourceMappingURL=index.js.map