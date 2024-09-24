export interface Tag {
  slug: string;
  label: string;
  position: 'top' | 'side' | 'gol';
}

export const tags: Tag[] = [
  { slug: "monster", label: "Monsters", position: 'top' },
  { slug: "robot", label: "Robots", position: 'top' },
  { slug: "coordinator", label: "The Coordinator", position: 'top' },
  { slug: "rebel", label: "Rebels", position: 'top' },
  { slug: "genius", label: "Geniuses", position: 'top' },
  { slug: "demon", label: "Demons", position: 'top' },
  { slug: "list", label: "List", position: 'side' },
  { slug: "thought-experiment", label: "Thought Experiment", position: 'side' },
  { slug: "design-system", label: "Design System", position: 'side' },
  { slug: "narrative", label: "Narrative", position: 'side' },
  { slug: "rhetoric", label: "Rhetoric", position: 'side' },
  { slug: "textbook", label: "Textbook", position: 'gol' },
  { slug: "16-patterns", label: "16 Patterns", position: 'gol' },
  { slug: "+telepathy", label: "+ Telepathy", position: 'gol' },
];

export const getTagLabel = (slug: string): string => {
  const tag = tags.find(t => t.slug === slug);
  return tag ? tag.label : slug;
};