import { supabase } from "./supabase";

export interface DncEntry {
  id: number;
  phoneNumber: string;
  addedAt: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowToEntry(row: any): DncEntry {
  return {
    id: row.id,
    phoneNumber: row.phone_number,
    addedAt: new Date(row.added_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  };
}

export async function fetchDncEntries(): Promise<DncEntry[]> {
  const { data, error } = await supabase
    .from("do_not_call")
    .select("*")
    .order("added_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map(rowToEntry);
}

export async function insertDncEntries(phoneNumbers: string[]): Promise<DncEntry[]> {
  const rows = phoneNumbers.map((n) => ({ phone_number: n.trim() }));
  const { data, error } = await supabase
    .from("do_not_call")
    .upsert(rows, { onConflict: "phone_number", ignoreDuplicates: true })
    .select();
  if (error) throw error;
  return (data ?? []).map(rowToEntry);
}

export async function deleteDncEntry(id: number): Promise<void> {
  const { error } = await supabase.from("do_not_call").delete().eq("id", id);
  if (error) throw error;
}
