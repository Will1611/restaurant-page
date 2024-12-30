"use strict";

export const showMenu = () => {
  const contentTop = document.querySelector(".content-top");
  const contentBottom = document.querySelector(".content-bottom");
  let elUl = document.createElement("ul");
  // let elLiSection = document.createElement("li");
  // let elH2 = document.createElement("h2");
  let elP = document.createElement("p");

  const menu = {
    appetizers: {
      title: "Appetizers (Antipasti)",
      1: "Bruschetta al Pomodoro – Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil.",
      2: "Caprese Salad – Fresh mozzarella, ripe tomatoes, basil, olive oil, and balsamic glaze.",
      3: "Arancini – Crispy rice balls stuffed with mozzarella and served with marinara sauce.",
      4: "Carpaccio di Manzo – Thinly sliced raw beef, arugula, capers, Parmesan, and olive oil.",
      5: "Prosciutto e Melone – Thinly sliced prosciutto wrapped around sweet melon slices.",
    },
    pasta: {
      title: "Pasta Dishes (Primi Piatti)",
      1: "Spaghetti Bolognese – Traditional Italian beef and tomato sauce with a hint of red wine.",
      2: "Fettuccine Alfredo – Fresh fettuccine pasta with a creamy Parmesan sauce.",
      3: "Penne Arrabbiata – Penne pasta in a spicy tomato sauce with garlic, chili, and parsley.",
      4: "Lasagna alla Bolognese – Layers of pasta, beef ragù, béchamel, and Parmesan.",
      5: "Pasta Primavera – A light pasta with sautéed seasonal vegetables, garlic, and olive oil.",
    },
    main: {
      title: "Main Courses (Secondi Piatti)",
      1: "Pollo Parmigiana – Breaded chicken cutlet topped with marinara sauce and melted mozzarella, served with spaghetti.",
      2: "Vitello Milanese – Breaded veal cutlet served with a lemon wedge and a side of sautéed spinach.",
      3: "Branzino al Forno – Whole roasted sea bass with lemon, herbs, and olive oil.",
      4: "Osso Buco – Slow-braised veal shank in a rich tomato sauce with white wine and vegetables, served with risotto.",
      5: "Tagliata di Manzo – Grilled ribeye steak sliced and served with arugula, Parmesan, and balsamic glaze.",
    },
    sides: {
      title: "Side Dishes (Contorni)",
      1: "Patate al Rosmarino – Roasted potatoes with rosemary and garlic.",
      2: "Spinaci Sautéed – Sautéed spinach with garlic and olive oil.",
      3: "Caponata Siciliana – Sweet and sour eggplant stew with olives, capers, and tomatoes.",
      4: "Fagiolini Aglio e Olio – Green beans sautéed in garlic and olive oil.",
      5: "Insalata Mista – Mixed green salad with tomatoes, cucumbers, and balsamic dressing.",
    },
    desserts: {
      title: "Desserts (Dolci)",
      1: "Tiramisu – Classic Italian dessert made with espresso-soaked ladyfingers, mascarpone cheese, and cocoa.",
      2: "Panna Cotta – Creamy vanilla pudding topped with a berry compote.",
      3: "Cannoli Siciliani – Crisp pastry tubes filled with sweet ricotta cheese and chocolate chips.",
      4: "Zabaglione – Italian custard made with Marsala wine, served with fresh berries.",
      5: "Gelato – Authentic Italian ice cream in a variety of flavors (vanilla, chocolate, pistachio, hazelnut).",
    },
    beverages: {
      title: "Beverages",
      1: "Italian Wines – A selection of red and white wines from Tuscany, Sicily, and Piedmont.",
      2: "Espresso – Strong, aromatic Italian coffee.",
      3: "Cappuccino – Espresso topped with steamed milk and foam.",
      4: "Acqua Minerale – Still or sparkling mineral water.",
      5: "Limoncello – Traditional Italian lemon liqueur, served chilled.",
    },
  };

  elP.textContent = "Our Menu";
  contentTop.appendChild(elP);

  for (let section in menu) {
    const elLiSection = document.createElement("li");
    const elH2 = document.createElement("h2");
    const elOl = document.createElement("ol");

    elH2.textContent = menu[section].title;
    elLiSection.appendChild(elH2);
    elLiSection.appendChild(elOl);

    elUl.appendChild(elLiSection);
    console.log(elUl);

    for (let key in menu[section]) {
      if (key !== "title") {
        const elLi = document.createElement("li");
        elLi.textContent = menu[section][key];
        elOl.appendChild(elLi);
      }
    }
    contentBottom.appendChild(elUl);
  }
};
