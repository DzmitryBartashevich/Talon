package com;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TalonRespository extends JpaRepository<Talon, Integer> {


    List<Talon> findByTimeContainingOrFiopacientaContainingOrFiovrachaContainingOrSpecialityContainingOrCabinetContaining
            (String text,
             String text1,
             String text2,
             String text3,
             String text4);
}
