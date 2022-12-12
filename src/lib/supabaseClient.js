import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://frvmswtytsjhuovvwjqt.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydm1zd3R5dHNqaHVvdnZ3anF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NjMwMDIsImV4cCI6MTk4NDUzOTAwMn0.ypjl7jOeEd5zMen1tmwVP0qmk7O2hV4-j_O-xTg_Fog'
);
