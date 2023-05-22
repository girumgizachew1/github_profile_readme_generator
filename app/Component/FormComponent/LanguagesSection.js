import React, { useState } from 'react';

const languageCategories = [
    {
        category: 'Programming Languages',
        languages: [
          { name: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
          { name: 'Clojure', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg' },
          { name: 'CoffeeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original-wordmark.svg' },
          { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
          { name: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
          { name: 'Elixir', icon: 'https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg' },
          { name: 'Erlang', icon: 'https://www.vectorlogo.zone/logos/erlang/erlang-official.svg' },
          { name: 'Go', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg' },
          { name: 'Haskell', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg' },
          { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
          { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
          { name: 'Nim', icon: 'https://www.vectorlogo.zone/logos/nim-lang/nim-lang-icon.svg' },
          { name: 'Objective-C', icon: 'https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg' },
          { name: 'Perl', icon: 'https://api.iconify.design/logos-perl.svg' },
          { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
          { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
          { name: 'Ruby', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg' },
          { name: 'Rust', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg' },
          { name: 'Scala', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg' },
          { name: 'Swift', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg' },
          { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
        ]
      },
      {
        category: 'Frontend Development',
        languages: [
          { name: 'Angular', icon: 'https://angular.io/assets/images/logos/angular/angular.svg' },
          { name: 'AngularJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg' },
          { name: 'Babel', icon: 'https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg' },
          { name: 'Backbone.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg' },
          { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' },
          { name: 'Bulma', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg' },
          { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
          { name: 'Ember', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/ember/ember-original-wordmark.svg' },
          { name: 'GTK', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg' },
          { name: 'Gulp', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg' },
          { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
          { name: 'Materialize', icon: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg' },
          { name: 'Pug', icon: 'https://cdn.worldvectorlogo.com/logos/pug.svg' },
          { name: 'Qt', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg' },
          { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
          { name: 'Redux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' },
          { name: 'Sass', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg' },
          { name: 'Svelte', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg' },
          { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
          { name: 'Vue.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg' },
          { name: 'Vuetify', icon: 'https://bestofjs.org/logos/vuetify.svg' },
          { name: 'Webpack', icon: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg' },
          { name: 'wxWidgets', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg' },
        ]
      },    {
        category: 'Backend And Database',
        languages: [
          { name: 'Cassandra', icon: 'https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg' },
          { name: 'CockroachDB', icon: 'https://cdn.worldvectorlogo.com/logos/cockroachdb.svg' },
          { name: 'CouchDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg' },
          { name: 'Elasticsearch', icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg' },
          { name: 'Express.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
          { name: 'GraphQL', icon: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg' },
          { name: 'Hadoop', icon: 'https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg' },
          { name: 'Hive', icon: 'https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg' },
          { name: 'Kafka', icon: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg' },
          { name: 'MariaDB', icon: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg' },
          { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
          { name: 'Microsoft SQL Server', icon: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
          { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
          { name: 'NestJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg' },
          { name: 'NGINX', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg' },
          { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
          { name: 'OpenResty', icon: 'https://openresty.org/images/logo.png' },
          { name: 'Oracle', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg' },
          { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' },
          { name: 'RabbitMQ', icon: 'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg' },
          { name: 'Realm', icon: 'https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg' },
          { name: 'Redis', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg' },
          { name: 'Solr', icon: 'https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg' },
          { name: 'Spring', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
          { name: 'SQLite', icon: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg' },
        ]
      },
      {
        category: 'Mobile Development',
        languages: [
          { name: 'Android', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg' },
          { name: 'Apache Cordova', icon: 'https://www.vectorlogo.zone/logos/apache_cordova/apache_cordova-icon.svg' },
          { name: 'Dart', icon: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg' },
          { name: 'Flutter', icon: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
          { name: 'Ionic', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg' },
          { name: 'Kotlin', icon: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg' },
          { name: 'NativeScript', icon: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg' },
          { name: 'React Native', icon: 'https://reactnative.dev/img/header_logo.svg' },
          { name: 'Xamarin', icon: 'https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg' },
        ]
      },
      {
        category: 'Machine Learning and Artificial Intelligence',
        languages: [
          { name: 'OpenCV', icon: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },
          { name: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg' },
          { name: 'PyTorch', icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg' },
          { name: 'scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
          { name: 'Seaborn', icon: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
          { name: 'TensorFlow', icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' },
        ]
      },
  {
    category: 'Frameworks',
    languages: [
      { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
      { name: 'Angular', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg' },
      // Add more framework languages here
    ],
  },
  // Add more language categories as needed
];

function LanguagesSection() {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const [selectedCategory, setSelectedCategory] = useState(languageCategories[0].category);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="space-y-8">
    <div className='flex justify-between' >
      <h1 className="text-xl font-semibold">Skills</h1>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategorySelect(e.target.value)}
        className="border rounded-md py-2 px-4"
      >
        {languageCategories.map((category) => (
          <option key={category.category} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>
      </div>
      <div>
        <ul className="grid grid-cols-6 gap-4">
          {languageCategories.find((category) => category.category === selectedCategory).languages.map((language) => (
            <li key={language.name}>
              <label>
                <input
                  type="checkbox"
                  name="language"
                  value={language.name}
                  checked={selectedLanguage.includes(language.name)}
                  onChange={() => handleLanguageSelect(language.name)}
                />
                <img src={language.icon} alt={language.name} width="80" height="80" />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default LanguagesSection;
