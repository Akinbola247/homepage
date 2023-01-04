import retro from "./components/images/image-retro-pcs.jpg"
import laptops from "./components/images/image-top-laptops.jpg"
import growth from "./components/images/image-gaming-growth.jpg"


const arraylist = [
    { 
        id : 0,
        number : "01",
        img : `${retro}`,
        alt : "retro",
        heading : "Reviving Retro PCs",
        message : "What happens when old PCs are given modern upgrades?"
    },
    {
        id : 1,
        number : "02",
        img : `${laptops}`,
        alt : "laptop",
        heading : "Top 10 Laptops of 2022",
        message : "Our best picks for various needs and budgets." 
    },
    {
        id : 2,
        number : "03",
        img : `${growth}`,
        alt : "growth",
        heading : "The Growth of Gaming",
        message : "How the pandemic has sparked fresh opportunities." 
    },

]

export default arraylist;


