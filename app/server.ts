import {beforeMethod, Wove, Metadata} from 'aspect.js';

class LoggerAspect {
  @beforeMethod({
    classNamePattern: /^Article/,
    methodNamePattern: /^(get|set)/
  })
  invokeBeforeMethod(meta: Metadata) {
    // meta.woveMetadata == { bar: 42 }
    console.log(`Inside of the logger. Called ${meta.className}.${meta.method.name} with args: ${meta.method.args.join(', ')}.`);
  }
}

class Article {
  id: number;
  title: string;
  content: string;
  constructor(id:number, title:string, content:string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

@Wove({ bar: 42 })
class ArticleCollection {
  articles: Article[] = [];
  getArticle(id: number) {
    console.log(`Getting article with id: ${id}.`);
    return this.articles.filter(a => {
      return a.id === id;
    }).pop();
  }
  setArticle(article: Article) {
    console.log(`Setting article with id: ${article.id}.`);
    this.articles.push(article);
  }
}

const collection = new ArticleCollection();
collection.setArticle(new Article(1, 'test', 'contetnt'));
const article = collection.getArticle(1);
console.log(article);
