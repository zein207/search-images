import { useState } from "react";
import { Formik, Form, Field } from "formik";
import CardComponent from './components/CardComponent';
import './header.css';
import './content.css';
import './article.css';

const App = () => {

  const [photos, setPhotos] = useState([]);

  console.log({photos});

  return (
    <div>

      <header>
        <Formik
          initialValues={{
            search: ''
          }}
          onSubmit={async values => {
            // call unsplash API
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=6&query=${values.search.toLowerCase()}`, {
              headers: {
                'Authorization': 'Client-ID DWPr_VedUSvQcNP8bx-G0HAZk-LoYSqOcC4UBsqhres'
              }
            })
            const data = await response.json()
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name='search' />
          </Form>

        </Formik>
      </header>

      <div className="container">
        <div className="center">
          <CardComponent photos={photos} />
        </div>
      </div>
    </div>
  );
}

export default App;
