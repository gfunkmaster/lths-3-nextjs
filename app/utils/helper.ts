import { typeColors } from "../lib/definitions";

export const defaultColor = "bg-gray-100";

export const getTypeColor = (types: any) => {
  for (const type of types) {
    if (type.type.name in typeColors) {
      return typeColors[type.type.name];
    }
  }
  return defaultColor;
};