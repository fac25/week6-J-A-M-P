BEGIN; 

INSERT INTO books VALUES

(1, 'The Light We Carry', 'Michelle Obama','Science fiction', 3, 'some description... this book is about stuff', 'src of image'),
(2, 'The Light We Carry', 'Michelle Obama','Science fiction', 3, 'some description... this book is about stuff', 'src of image'),
(3, 'The Light We Carry', 'Michelle Obama','Science fiction', 3, 'some description... this book is about stuff', 'src of image')

ON CONFLICT DO NOTHING;


COMMIT;
