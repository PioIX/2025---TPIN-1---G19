CREATE TABLE IF NOT EXISTS Canciones(
    nombre_cancion VARCHAR(50),
    nombre_artista VARCHAR(50),
    nro_reproducciones BIGINT
);

INSERT INTO Canciones (nombre_cancion, nombre_artista, nro_reproducciones)
VALUES
	('Manchild',	'Sabrina Carpenter',	64000000),
    ('Ordinary',	'Alex Warren',	581000000),
    ('back to friends',	'sombr',	328000000),
    ('Die With A Smile',	'Lady Gaga & Bruno Mars',	2623000000),
    ('Don’t Say You Love Me',	'Jin',	156000000),
    ('BIRDS OF A FEATHER',	'Billie Eilish',	2690000000),
    ('La Plena',	'W Sound ft. Beéle Ovy On The Drums',	370000000),
    ('undressed',	'sombr',	277000000),
    ('Love Me Not',	'Ravyn Lenae',	260000000),
    ('APT.',	'ROSÉ & Bruno Mars',	1746000000),
    ('Who',	'Jimin',	1770000000),
    ('WILDFLOWER',	'Billie Eilish',	1286000000),
    ('Just Keep Watching',	'Tate McRae ft. F1 The Album',	54000000),
    ('TU SANCHO',	'Fuerza Regida',	92000000),
    ('Sailor Song',	'Gigi Perez',	1118000000),
    ('Espresso',	'Sabrina Carpenter',	2319000000),
    ('Beautiful Things',	'Benson Boone',	2219000000),
    ('Shake It To The Max (FLY)',	'MOLIY Remix',	132000000),
    ('DtMF',	'Bad Bunny',	848000000),
    ('no tiene sentido',	'Beéle',	65000000),
    ('That’s So True',	'Gracie Abrams',	1125000000),
    ('luther (with sza)',	'Kendrick Lamar',	986000000),
    ('Iris',	'The Goo Goo Dolls',	2450000000),
    ('Mangu',	'Fourtwnty ft. Charita Utami',	195000000),
    ('The Night We Met',	'Lord Huron',	3055000000),
    ('Lose Control',	'Teddy Swims',	1846000000),
    ('All The Stars',	'Kendrick Lamar ft. SZA',	2404000000),
    ('Marlboro Rojo',	'Fuerza Regida',	95000000),
    ('Sapphire',	'Ed Sheeran',	27000000),
    ('Youll Be in My Heart',	'NIKI (Spotify Singles)',	472000000),
    ('Messy',	'Lola Young',	688000000),
    ('One Of The Girls',	'The Weeknd ft. Jennie & Lily‑Rose Depp',	1925000000),
    ('like JENNIE',	'JENNIE',	354000000),
    ('BAILE INoLVIDABLE',	'Bad Bunny',	659000000),
    ('party 4 u',	'Charli XCX',	2138715),
    ('Timeless',	'The Weeknd ft. Playboi Carti',	2156280),
    ('How You Like That',	'BLACKPINK',	1141000000),
    ('Blinding Lights',	'The Weeknd',	4823000000),
    ('Shape of You',	'Ed Sheeran',	4408000000),
    ('Someone You Loved',	'Lewis Capaldi',	3938000000),
    ('As It Was',	'Harry Styles',	3862000000),
    ('Starboy',	'The Weeknd',	3943000000),
    ('Sunflower',	'Post Malone & Swae Lee',	3850000000),
    ('Sweater Weather',	'The Neighbourhood',	3836000000),
    ('One Dance',	'Drake feat. Wizkid & Kyla',	3670000000),
    ('Shake It Off',	'Taylor Swift',	1653000000),
    ('Please Please Please',	'Sabrina Carpenter',	1480000000),
    ('Stay',	'The Kid LAROI & Justin Bieber',	3576000000),
    ('Perfect',	'Ed Sheeran',	3480000000),
    ('Believer',	'Imagine Dragons',	3467000000);

CREATE TABLE IF NOT EXISTS Usuarios(
    idU INT,
    nombre_usuario VARCHAR(50),
    contraseña VARCHAR(50),
    es_admin BOOLEAN,
    PRIMARY KEY (idU)
);


CREATE TABLE IF NOT EXISTS Respuestas(
    acerto BOOLEAN
);




INSERT INTO Usuarios (idUsuario, nombre_usuario, contraseña, es_admin )
VALUES
	('1', '1', '1', 1);

