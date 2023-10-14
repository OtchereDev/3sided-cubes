export function calculateFairness(value: number) {
  if (value >= 0 && value <= 15) {
    return 10;
  } else if (value > 15 && value <= 37) {
    return 32;
  } else if (value > 37 && value <= 57) {
    return 53;
  } else if (value > 57 && value <= 77) {
    return 73;
  } else {
    return 100;
  }
}

export function getFairnessLevel(percentage: number) {
  switch (percentage) {
    case 10:
      return "very_unfair";
    case 32:
      return "unfair";
    case 53:
      return "not_sure";
    case 73:
      return "fair";
    case 100:
      return "very_fair";
    default:
      return "";
  }
}

export function getFairnessPercentage(val: string) {
  switch (val) {
    case "very_unfair":
      return 10;
    case "unfair":
      return 32;
    case "not_sure":
      return 53;
    case "fair":
      return 73;
    case "very_fair":
      return 100;
    default:
      return 0;
  }
}

export function getFairnessDisplayName(val: string) {
  switch (val) {
    case "very_unfair":
      return "Very Unfair";
    case "unfair":
      return "Unfair";
    case "not_sure":
      return "Not Sure";
    case "fair":
      return "Fair";
    case "very_fair":
      return "Very Fair";
    default:
      return "";
  }
}
