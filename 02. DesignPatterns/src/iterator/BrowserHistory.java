package iterator;

import java.util.ArrayList;
import java.util.List;

public class BrowserHistory {
    List<String> urls = new ArrayList<>();

    public void push(String url) {
        urls.add(url);
    }

    public String pop() {
        int index = urls.size() - 1;
        var lastUrl = urls.get(index);
        urls.remove(lastUrl);

        return lastUrl;
    }

    public Iterator createIterator() {
        return new ListIterator(this);
    }


    public class ListIterator implements Iterator {
        private BrowserHistory history;
        private int index;

        public ListIterator(BrowserHistory history) {
            this.history = history;
        }

        public boolean hasNext() {
            return (index < history.urls.size());
        }

        public void next() {
            index++;
        }

        public String current() {
            return history.urls.get(index);
        }
    }
}
