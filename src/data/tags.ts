export interface Tag {
    slug: string;
    label: string;
  }
  
  export const tags: Tag[] = [
    { slug: "monster", label: "Monster" },
    { slug: "robot", label: "Robot" },
    { slug: "coordinator", label: "Coordinator" },
    { slug: "genius", label: "Genius" },
    { slug: "rebel", label: "Rebel" },
  ];
  
  export const getTagLabel = (slug: string): string => {
    const tag = tags.find(t => t.slug === slug);
    return tag ? tag.label : slug;
  };