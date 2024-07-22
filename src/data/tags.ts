export interface Tag {
    slug: string;
    label: string;
  }
  
  export const tags: Tag[] = [
    { slug: "monsters", label: "Monsters" },
    { slug: "folk", label: "Folk" },
    { slug: "ai", label: "AI" },
    { slug: "templates", label: "Templates" },
    { slug: "pidgin", label: "Pidgin" },
  ];
  
  export const getTagLabel = (slug: string): string => {
    const tag = tags.find(t => t.slug === slug);
    return tag ? tag.label : slug;
  };