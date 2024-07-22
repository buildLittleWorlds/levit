export interface Tag {
    slug: string;
    label: string;
  }
  
  export const tags: Tag[] = [
    { slug: "moose", label: "moose" },
    { slug: "wayback", label: "wayback" },
    { slug: "coordinator", label: "The Coordinator" },
    { slug: "events", label: "events" },
    { slug: "weather", label: "weather" },
  ];
  
  export const getTagLabel = (slug: string): string => {
    const tag = tags.find(t => t.slug === slug);
    return tag ? tag.label : slug;
  };