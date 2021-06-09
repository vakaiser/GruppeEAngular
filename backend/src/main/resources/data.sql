INSERT INTO employee (`id`, `latitude`, `longitude`, `name`) VALUES ('1', '47.0', '16.0', 'Hans');
INSERT INTO employee (`id`, `latitude`, `longitude`, `name`) VALUES ('2', '47.0', '16.0', 'Herbert');

INSERT INTO service (`id`, `date`, `employee_id`, `service_name`, `latitude`, `longitude`) VALUES ('1', '2001-01-01 00:00:00', '1', 'Service for Hans', '47.0', '16.0');
INSERT INTO service (`id`, `date`, `employee_id`, `service_name`, `latitude`, `longitude`) VALUES ('2', '2001-01-01 00:00:00', '1', 'Service2 for Hans', '47.0', '16.0');
INSERT INTO service (`id`, `date`, `employee_id`, `service_name`, `latitude`, `longitude`) VALUES ('3', '2001-01-01 00:00:00', '2', 'Service for Herbert', '47.0', '16.0');

