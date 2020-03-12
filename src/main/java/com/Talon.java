package com;

import javax.persistence.*;

@Entity
public class Talon {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String time;
    private String fiopacienta;
    private String fiovracha;
    private String speciality;
    private String cabinet;



    public Talon() {  }

    public Talon(String time,
                 String fiopacienta,
                 String fiovracha,
                 String speciality,
                 String cabinet) {

        this.setTime(time);
        this.setFiopacienta(fiopacienta);
        this.setFiovracha(fiovracha);
        this.setSpeciality(speciality);
        this.setCabinet(cabinet);
    }

    public Talon(int id,
                 String time,
                 String fiopacienta,
                 String fiovracha,
                 String speciality,
                 String cabinet) {
        this.setId(id);
        this.setTime(time);
        this.setFiopacienta(fiopacienta);
        this.setFiovracha(fiovracha);
        this.setSpeciality(speciality);
        this.setCabinet(cabinet);


    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getFiopacienta() {
        return fiopacienta;
    }

    public void setFiopacienta(String fiopacienta) {
        this.fiopacienta = fiopacienta;
    }

    public String getFiovracha() {
        return fiovracha;
    }

    public void setFiovracha(String fiovracha) {
        this.fiovracha = fiovracha;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getCabinet() {
        return cabinet;
    }

    public void setCabinet(String cabinet) {
        this.cabinet = cabinet;
    }

    @Override
    public String toString() {

            String str = "Talon{" +
                    "id="+ id +
                    "time='" + time + '\'' +
                    "fiopacienta'" + fiopacienta + '\'' +
                    "fiovracha'" + fiovracha + '\'' +
                    "speciality'" + speciality + '\'' +
                    "cabinet'" + cabinet + '\'' +
                    '}';
            return str;

    }

}
