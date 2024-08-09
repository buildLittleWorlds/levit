export interface Tag {
    slug: string;
    label: string;
  }
  
  export const tags: Tag[] = [
    { slug: "monster", label: "Monsters" },
    { slug: "robot", label: "Robots" },
    { slug: "coordinator", label: "The Coordinator" },
    { slug: "rebel", label: "Rebels" },
    { slug: "genius", label: "Geniuses" },
    { slug: "demon", label: "Demons" },
  ];
  
  export const getTagLabel = (slug: string): string => {
    const tag = tags.find(t => t.slug === slug);
    return tag ? tag.label : slug;
  };