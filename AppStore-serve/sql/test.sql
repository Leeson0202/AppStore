select name
from app
where app.id in
      (select tp.app_id from appType tp where tp.type_key = 'mac')
  and app.id in
      (select lb.app_id from appLabel lb)
order by app.view



select name
from app
where app.id in
      (select tp.app_id from appType tp where tp.type_key = 'mac')
  and app.id in
      (select lb.app_id from appLabel lb)
order by app.view
limit 0,20;

select name
from app
where app.id in
      (select tp.app_id from appType tp where tp.type_key = 'mac')
  and app.id in
      (select lb.app_id from appLabel lb)
order by app.view
limit 1,20;


select app.name
from app
where app.id not in
      (select lb.app_id from appLabel lb)

insert into appLabel (label_key, app_id)
select '', app.id
from app
where app.id not in
      (select lb.app_id from appLabel lb)