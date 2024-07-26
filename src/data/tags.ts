export interface Tag {
    slug: string;
    label: string;
  }
  
  export const tags: Tag[] = [
    { slug: "monsters", label: "Monsters" },
    { slug: "robots", label: "Robots" },
    { slug: "coordinator", label: "The Coordinator" },
    { slug: "rebels", label: "Rebels" },
    { slug: "geniuses", label: "Geniuses" },
  ];
  
  export const getTagLabel = (slug: string): string => {
    const tag = tags.find(t => t.slug === slug);
    return tag ? tag.label : slug;
  };