export interface Tag {
    slug: string;
    label: string;
  }
  
  export const tags: Tag[] = [
    { slug: "moose", label: "moose" },
    { slug: "millie", label: "millie" },
    { slug: "coordinator", label: "The Coordinator" },
    { slug: "rants", label: "rants" },
    { slug: "weather", label: "weather" },
  ];
  
  export const getTagLabel = (slug: string): string => {
    const tag = tags.find(t => t.slug === slug);
    return tag ? tag.label : slug;
  };