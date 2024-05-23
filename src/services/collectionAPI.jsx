// collectionAPI.jsx
export const fetchCollection = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_ENDPOINT}/collection/collection`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching collection:", error);
    return [];
  }
};

export const getPhotoByCollection = async (collectionId) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_ENDPOINT}/photo/byCollection/${collectionId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching photo for collection with ID ${collectionId}:`, error);
    return [];
  }
};

export const fetchCollectionById = async (userId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/collection/collection/${collectionId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener collcection por ID:", error);
    return { success: false, error: "Error al obtener collection por ID" };
  }
};