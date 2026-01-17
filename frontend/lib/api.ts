const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;


console.log('API_BASE_URL =', process.env.NEXT_PUBLIC_API_URL);

/* -------------------- ADMIN -------------------- */
// export async function adminLogin(password: string) {
//   const res = await fetch(`${API_BASE_URL}/admin/login`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ password }),
//   });

//   if (!res.ok) throw new Error('Login failed');
//   return res.json();
// }
export async function adminLogin(password: string) {
  const res = await fetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'Login failed');
  }

  return res.json();
}


/* -------------------- IMAGES -------------------- */
export async function fetchImages(section?: string, surprise?: boolean) {
  const params = new URLSearchParams();

  if (section) params.append('section', section);
  if (surprise !== undefined)
    params.append('surprise', String(surprise));

  const res = await fetch(`${API_BASE_URL}/images?${params.toString()}`);

  if (!res.ok) throw new Error('Failed to fetch images');
  return res.json();
}

export async function uploadImage(formData: FormData) {
  const token = localStorage.getItem('admin_token');

  const res = await fetch(`${API_BASE_URL}/images`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error('Upload failed');
  return res.json();
}

export async function deleteImage(id: string) {
  const token = localStorage.getItem('admin_token');

  const res = await fetch(`${API_BASE_URL}/images/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Delete failed');
  return res.json();
}

/* -------------------- TEXT CONTENT -------------------- */
export async function fetchTexts() {
  const res = await fetch(`${API_BASE_URL}/texts`);

  if (!res.ok) throw new Error('Failed to fetch texts');
  return res.json();
}

export async function updateText(key: string, value: string) {
  const token = localStorage.getItem('admin_token');

  const res = await fetch(`${API_BASE_URL}/texts`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ key, value }),
  });

  if (!res.ok) throw new Error('Failed to update text');
  return res.json();
}

export async function fetchMusic() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/music`,
    { cache: "no-store" }
  );
  return res.json();
}

type Track = {
  url: string;
  title: string;
  enabled: boolean;
};

export async function updateMusic(data: {
  tracks: Track[];
  mode: 'order' | 'shuffle';
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/music`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to update music');
  }

  return res.json();
}
