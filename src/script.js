const laws = [{
        title: "It's Illegal to Chew Gum in Singapore",
        law: "Sometimes we all suffer when fools break the rules. After vandals used chewing gum to mess with the Mass Rapid Transit system and the Housing and Development Board spent $150,000 a year to clean gum liter, Singapore banned all gum substances in 1992. Anyone importing, selling or making gum in Singapore can get fined and/or jail time, with the exception of nicotine and dental gums offering therapeutic value. Don 't get caught blowing bubbles in the streets!"
    },
    {
        title: "Canadian Radio Stations Must Play Canadian Artists",
        law: "The Canadians are a patriotic bunch. So much so that all Canadian radio stations are required, by law, to play Canadian artists on the airwaves at least 35 percent of the time, especially during the hours of 6 a.m. and 6 p.m., Monday through Friday. This means that in an hour of radio during the workweek, you'll hear more than 20 minutes of artists like Nickelback, Alanis Morissette, Celine Dion, Michael Bublé and Justin Bieber — all of whom are proud Canucks."
    },
    {
        title: "It's Illegal to Run Out of Gas on the German Autobhan",
        law: "Notorious for having dynamic speed limits that give drivers a chance to travel more than 100 miles per hour, car enthusiasts and speed demons love trips along the German Autobhan. But, if you run out of gas, you could face a big fine. And don't even think of walking to a gas station; you'll get another fine for that! Why? Germans believe you have the power to keep your car properly gassed up, so if you run out of gas, it's your own fault. Walking along the highway is unsafe, as is having your vehicle stalled on or on the side of the road. Keep your eyes on your gas gauge and fill 'er up when you get low."
    },
    {
        title: "It's Illegal to Hike Naked in Switzerland",
        law: "After Swiss and German travelers decided to make naked hiking a thing in Switzerland a decade ago (really!), Swiss officials reminded folks that a public indecency law still exists and you can be fined if caught in the woods in the buff. In 2011, a Swiss man was fined more than $100 for his bare-bottomed walk."
    },
    {
        title: "It's Illegal to Feed Pigeons in Venice",
        law: "With thousands of pigeons descending upon Saint Mark's Square and Venice, lured by the the tourists readily handing out food in exchange for Instagram-worthy photos, Venice lawmakers officially made it illegal to feed the pesky fowl in 2008. It is said the cleanup from the birds cost each citizen €275 per year, so now, the tables are turned. If you're caught feeding the pigeons, you could face fines of up to €700. Better to get the picture-perfect shot of Venice's beautiful bridges instead."
    },
    {
        title: "It's Illegal to Wear High Heels to the Acropolis",
        law: "When packing for a trip to Greece, make sure you have the right shoes. The country banned high heels at the Acropolis in 2009, so no stilettos at the Parthenon. Not sure why anyone would want to make a trek around the ruins and dirt in heels — surely it's tough to walk and will damage the shoes — but the Greeks put this ban in place to protect its ruins from damage caused by the sharp shoes. The ruins are nearly 2,500 years old, so be respectful and wear some soft-soled shoes when you visit."
    },
    // {
    //     title: "Don't Wear Your Winnie the Pooh T-Shirt in Poland",
    //     law: "The cuddly little bear all stuffed with fluff also — gasp! — does not wear pants. Because of this, Poland issued a ban on Winnie the Pooh around playgrounds and schools, finding the A.A. Milne character a bit too risqué for the likes of impressionable children."
    // },
    // {
    //     title: "Men Must Wear Speedos on French Beaches",
    //     law: "Did you think the French just really liked their Speedos? Actually, its French law that men do not wear loose-fitting swim trunks on beaches, swimming pools and other public places where a swimsuit is required attire. The law wasn't for safety, but rather that men wouldn't dare walk around town in a Speedo, so if he wears a Speedo in the water, it surely would be cleaner than something he may have been wearing all day long. This need to avoid clothing that could have been worn throughout the day also extends to T-shirts; you'll need to lose those as fast as your surfer shorts."
    // },
    // {
    //     title: "It's Illegal to Ride a Cow Drunk in Scotland",
    //     law: "Before you get any crazy ideas — and have too much Scottish whisky — you should know you could get a ticket for drunk cow riding. Technically, the full 1872 law mandates people not be drunk when in charge of a cow, horse, carriage or steam engine. In case you are wondering, the same law states you cannot have a loaded firearm on you while drunk, as well. (We have to admit, that's a pretty good rule.)"
    // },
    // {
    //     title: "It's Illegal to Wear a Mask in Public in Denmark",
    //     law: "Not only masks, the Danish government wants to stop anyone from covering their faces in any way in public spaces. This includes masks, helmets, scarves, hats, fake beards and even burkas. The controversial ban went into effect in August 2018. Officials claim the ban helps to properly identify people during crowded events, should anything negative happen and someone need to be identified."
    // },
    // {
    //     title: "Registering as Married at a Hotel Makes It So in North Carolina",
    //     law: "Let's say a man and a woman walk into a hotel in North Carolina, request to share a room, and claim they are married. By common law marriage rules in the state, that man and woman would legally be married. As the couple "outwardly present themselves as husband and wife to the public," they are deemed a common law marriage, that is honored and valid in North Carolina.  Should you find yourself in need of a hotel room for the night, you may want to fess up if you aren't a married couple."
    // },
]

// generate random number
let randomNum = () => Math.floor(Math.random() * laws.length);
// get btn element
const nextLawBtn = document.getElementById('btn-next');
// get law title element
const title = document.getElementById('text-title');
// get law text element
const content = document.getElementById('text-content');

// update law content
const updateLawContent = () => {
    let law = laws[randomNum()];
    title.textContent = law["title"];
    content.textContent = law["law"];
}

// trigger new law output onclick
nextLawBtn.onclick = updateLawContent;