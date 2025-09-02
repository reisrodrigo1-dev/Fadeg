const blogEnum = {
  "oab-1-fase": 1307,
  "oab-2-fase": 460,
} as const;

type BlogEnum = keyof typeof blogEnum;

export { blogEnum, type BlogEnum };
