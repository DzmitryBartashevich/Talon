package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class TalonController {


    @Autowired
    TalonRespository talonRespository;


    @GetMapping("/health")
    public List<Talon> index(){
        return talonRespository.findAll();
    }


    @PostMapping("/health")
    public Talon add(@RequestBody Map<String, String> body){
        String time = body.get("time");
        String fiopacienta = body.get("fiopacienta");
        String fiovracha = body.get("fiovracha");
        String speciality = body.get("speciality");
        String cabinet = body.get("cabinet");


        return talonRespository.save(new Talon(time, fiopacienta,fiovracha,speciality,cabinet));
    }

    @PutMapping("/health/update/{id}")
    public Talon update(@PathVariable String id, @RequestBody Map<String, String> body){
        int Id = Integer.parseInt(id);
        // getting talon
        Talon talon = talonRespository.findOne(Id);

        talon.setTime(body.get("time"));
        talon.setFiopacienta(body.get("fiopacienta"));
        talon.setFiovracha(body.get("fiovracha"));
        talon.setSpeciality(body.get("speciality"));
        talon.setCabinet(body.get("cabinet"));


        return talonRespository.save(talon);
    }

    @DeleteMapping("health/delete/{id}")
    public boolean delete(@PathVariable String id){
        int Id = Integer.parseInt(id);
        talonRespository.delete(Id);
        return true;
    }


}
