create extension if not exists pgcrypto;

create table if not exists public.leaders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null default 'Lider da Campanha',
  email text unique not null,
  phone text,
  city text,
  neighborhood text,
  invite_url text,
  points integer not null default 0,
  level text not null default 'Mobilizador Bronze',
  created_at timestamptz not null default now()
);

create table if not exists public.supporters (
  id uuid primary key default gen_random_uuid(),
  leader_id uuid references public.leaders(id) on delete set null,
  name text not null,
  phone text,
  neighborhood text,
  city text not null default 'Candeias',
  status text not null default 'Novo cadastro',
  points integer not null default 0,
  tags text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.leader_goals (
  id uuid primary key default gen_random_uuid(),
  leader_id uuid references public.leaders(id) on delete cascade,
  title text not null,
  current_value integer not null default 0,
  target_value integer not null default 1,
  reward integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.leader_checkins (
  id uuid primary key default gen_random_uuid(),
  leader_id uuid references public.leaders(id) on delete set null,
  type text not null,
  location text not null,
  description text,
  points integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.leader_activities (
  id uuid primary key default gen_random_uuid(),
  leader_id uuid references public.leaders(id) on delete cascade,
  type text not null,
  text text not null,
  points integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.leader_announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  text text not null,
  priority text not null default 'Operacional',
  created_at timestamptz not null default now()
);

alter table public.leaders enable row level security;
alter table public.supporters enable row level security;
alter table public.leader_goals enable row level security;
alter table public.leader_checkins enable row level security;
alter table public.leader_activities enable row level security;
alter table public.leader_announcements enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, update on public.leaders to anon, authenticated;
grant select, insert, update on public.supporters to anon, authenticated;
grant select, insert, update on public.leader_goals to anon, authenticated;
grant select, insert, update on public.leader_checkins to anon, authenticated;
grant select, insert, update on public.leader_activities to anon, authenticated;
grant select, insert, update on public.leader_announcements to anon, authenticated;

drop policy if exists "public demo read leaders" on public.leaders;
drop policy if exists "public demo write leaders" on public.leaders;
drop policy if exists "public demo read supporters" on public.supporters;
drop policy if exists "public demo write supporters" on public.supporters;
drop policy if exists "public demo read goals" on public.leader_goals;
drop policy if exists "public demo write goals" on public.leader_goals;
drop policy if exists "public demo read checkins" on public.leader_checkins;
drop policy if exists "public demo write checkins" on public.leader_checkins;
drop policy if exists "public demo read activities" on public.leader_activities;
drop policy if exists "public demo write activities" on public.leader_activities;
drop policy if exists "public demo read announcements" on public.leader_announcements;
drop policy if exists "public demo write announcements" on public.leader_announcements;

create policy "public demo read leaders" on public.leaders for select using (true);
create policy "public demo write leaders" on public.leaders for insert with check (true);
create policy "public demo read supporters" on public.supporters for select using (true);
create policy "public demo write supporters" on public.supporters for insert with check (true);
create policy "public demo read goals" on public.leader_goals for select using (true);
create policy "public demo write goals" on public.leader_goals for insert with check (true);
create policy "public demo read checkins" on public.leader_checkins for select using (true);
create policy "public demo write checkins" on public.leader_checkins for insert with check (true);
create policy "public demo read activities" on public.leader_activities for select using (true);
create policy "public demo write activities" on public.leader_activities for insert with check (true);
create policy "public demo read announcements" on public.leader_announcements for select using (true);
create policy "public demo write announcements" on public.leader_announcements for insert with check (true);

insert into public.leaders (name, role, email, phone, city, neighborhood, invite_url, points, level)
values ('Joao Gabriel', 'Lider da Campanha', 'lider@drpitagoras.com.br', '(71) 99723-8027', 'Candeias', 'Nova Candeias', 'https://dr-pitagoras.vercel.app/cadastro/joao-gabriel', 186, 'Mobilizador Prata')
on conflict (email) do update set points = excluded.points, level = excluded.level;

with leader as (select id from public.leaders where email = 'lider@drpitagoras.com.br' limit 1)
insert into public.supporters (leader_id, name, phone, neighborhood, city, status, points, tags)
select leader.id, item.name, item.phone, item.neighborhood, 'Candeias', item.status, item.points, item.tags
from leader,
(values
  ('Maria Clara Santos', '(71) 98814-2210', 'Centro', 'Confirmado', 34, array['Saude','Familia']),
  ('Rafael Oliveira', '(71) 98120-3378', 'Malemba', 'Contato quente', 21, array['Juventude']),
  ('Ana Paula Reis', '(71) 99744-9031', 'Urucara', 'Visita marcada', 18, array['Educacao']),
  ('Carlos Henrique', '(71) 98602-1198', 'Santo Antonio', 'Novo cadastro', 12, array['Comercio']),
  ('Juliana Ferreira', '(71) 99935-6450', 'Sarandi', 'Observacao', 9, array['Comunidade'])
) as item(name, phone, neighborhood, status, points, tags)
where not exists (select 1 from public.supporters s where s.phone = item.phone);

insert into public.leader_announcements (title, text, priority)
values
  ('Nova narrativa em campo', 'Novo movimento, nova narrativa: foco em resultado verificavel e cuidado com o interior.', 'Alta'),
  ('Prova antes de promessa', 'Todo material com numeros deve citar fonte e responsavel pela validacao.', 'Operacional')
on conflict do nothing;
