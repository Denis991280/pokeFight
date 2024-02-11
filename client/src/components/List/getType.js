function getTypeImage(type) {
    switch (type) {
      case "Bug":
        return Bug;
      case "Dark":
        return Dark;
      case "Dragon":
        return Dragon;
      case "Electric":
        return Electric;
      case "Fairy":
        return Fairy;
      case "Fighting":
        return Fighting;
      case "Fire":
        return Fire;
      case "Flying":
        return Flying;
      case "Ghost":
        return Ghost;
      case "Grass":
        return Grass;
      case "Ground":
        return Ground;
      case "Ice":
        return Ice;
      case "Normal":
        return Normal;
      case "Poison":
        return Poison;
      case "Psychic":
        return Psychic;
      case "Rock":
        return Rock;
      case "Steel":
        return Steel;
      case "Water":
        return Water;
      default:
        return null;
    }
  }