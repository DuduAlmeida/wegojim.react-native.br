// export const Event = (response: any = {}): EventProxy => ({
//   id: response?.id || '#id_error',
//   author: response?.author,
//   content: response?.content,
//   tags: response?.tags || [],
//   imageSrc: response?.imageSrc,
//   subtitle: response?.subtitle,
//   location: response?.location,
//   title: response?.title || "",
//   type: response?.type || "error",
//   isFavorite: response?.isFavorite || false,
//   backgroundType: response?.backgroundType || 'fill',
//   startsAt: !!response?.startsAt ? new Date(response?.startsAt) : undefined,
// });

// export const EventList = (response: FirebaseResponse): EventProxy[] =>
//   Object.entries(response).map(([key, value]) => Event({
//     id: key,
//     ...value,
//   })) || [];

export default {};
