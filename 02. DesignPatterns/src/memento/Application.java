package memento;

public class Application {
    public static void main(String[] args) {
        var editor = new Editor();
        var history = new History();
        editor.setContent("I");
        history.save(editor.createState());
        editor.setContent("I am");
        history.save(editor.createState());
        editor.setContent("I am Jalitha");

        System.out.println(editor.getContent());
        //output will be "I am Jalitha"
        history.revert(editor);
        System.out.println(editor.getContent());
        //output will be "I am"
        history.revert(editor);
        System.out.println(editor.getContent());
        //output will be "I"
        history.revert(editor);
        //output will be "Cannot undo !"

    }
}
